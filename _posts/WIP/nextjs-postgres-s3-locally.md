---
title: "Building a Local Development Environment: Running a Next.js Full-Stack Application with PostgreSQL and Minio S3 Using Docker-Compose"
excerpt: "In this article, we will look at how to build a local development environment for a full-stack Next.js application with PostgreSQL and Minio S3 using Docker-Compose."
coverImage: "/blog/nextjs-postgres-s3-locally/cover.png"
date: "2024-06-01"
ogImage:
  url: "/blog/nextjs-postgres-s3-locally/cover.png"
---

As a developer working on a full-stack application, you need to have a local development environment that is as close as possible to the production environment. It will allow you to test and debug your application locally before deploying it to production.

Almost every full-stack application needs a database and a file storage so let's build a basic full-stack application that can save and retrieve data from a database and upload and download files from a file storage.

You can run your own PostgreSQL and Minio S3 server locally, or even use a cloud service like AWS RDS and S3. But it will take some time to set up and configure. Using docker-compose will make it super easy to set up a local development environment for your full-stack application. After you test it locally, all you need to switch to the production environment is to change the environment variables.

Additionally, you can test your application end-to-end (for example, using Cypress) in a local environment that is as close as possible to the production environment. Having pre-configured docker-compose file will make it easy to set up a CI/CD pipeline like GitHub Actions or GitLab CI.

Once you have a docker-compose file, you and your team can use it to set up the same local development environment on any machine in a few minutes just by one command. Overall, it will save you a lot of time and make your life easier.

In this article, we will look at how to build a local development environment for a full-stack Next.js application with Prisma ORM connected to PostgreSQL as a database and Minio S3 as a file storage using Docker-Compose.

You can find the full source code for this tutorial on [GitHub]()

When you are ready to deploy your application to production, you can use any type of database:

- Supabase (I love this one)
- Vercel Postgres
- Upstash
- AWS RDS
- Google Cloud SQL
- Azure Database for PostgreSQL
- Heroku Postgres
- DigitalOcean Managed Databases
- ScaleGrid
- ...

The same goes for the file storage, you need one that is compatible with the S3 protocol:

- AWS S3
- Google Cloud Storage (I tested it, it works)
- DigitalOcean Spaces
- Wasabi (One of the cheapest options)
- Backblaze B2
- ...

## Prerequisites

To follow this tutorial, you need to have Docker and Docker-Compose installed on your machine. You can find the instructions on how to install Docker and Docker-Compose [here](https://docs.docker.com/get-docker/).

When I firstly faced the task of setting up a local development environment for Next.js, Prisma and PostgreSQL, I found the [T3 tutorial](https://create.t3.gg/en/deployment/docker) but it didn't work for me. It might be they updated the tutorial since then. I used it as a starting point for this tutorial.

## Create a Next.js application

Let's start by creating a Next.js application. We will use the T3 stack (TypeScript, TailwindCSS, and Prisma ORM) for this tutorial to skip installing and configuring all the dependencies which is out of the scope of this article. You can find more information about the [T3 stack](https://create.t3.gg/).

Run the following command to create a new Next.js:

```bash
npm create t3-app@latest

```

After you run the command, you will be asked several questions:

```bash
   ___ ___ ___   __ _____ ___   _____ ____    __   ___ ___
  / __| _ \ __| /  \_   _| __| |_   _|__ /   /  \ | _ \ _ \
 | (__|   / _| / /\ \| | | _|    | |  |_ \  / /\ \|  _/  _/
  \___|_|_\___|_/‾‾\_\_| |___|   |_| |___/ /_/‾‾\_\_| |_|


│
◇  What will your project be called?
│  local-nextjs-postgres-s3
│
◇  Will you be using TypeScript or JavaScript?
│  TypeScript
│
◇  Will you be using Tailwind CSS for styling?
│  Yes
│
◇  Would you like to use tRPC?
│  No
│
◇  What authentication provider would you like to use?
│  None
│
◇  What database ORM would you like to use?
│  Prisma
│
◇   EXPERIMENTAL  Would you like to use Next.js App Router?
│  No
│
◇  Should we initialize a Git repository and stage the changes?
│  Yes
│
◇  Should we run 'npm install' for you?
│  Yes
│
◇  What import alias would you like to use?
│  ~/


```

### 1. Configure Next.js to work with Docker

According to the [Next.js documentation](https://nextjs.org/docs/pages/api-reference/next-config-js/output)

> Next.js can automatically create a standalone folder that copies only the necessary files for a production deployment including select files in node_modules.

To reduce image size we need to add `output: "standalone"` in the next.config.js file.
The next.config.js file should look like this:

```javascript
const config = {
  reactStrictMode: true,
  output: "standalone",
  // ...
};
```

### 2. Add .dockerignore file

I prefer having a separate folder for the docker files, so I created a folder called `compose` in the root of the project. We need to add a `.dockerignore` file to this folder to exclude unnecessary files from the Docker image. The `.dockerignore` file should look like this:

```text
.env
Dockerfile
.dockerignore
.next
.git
.gitignore
node_modules
npm-debug.log
README.md
```

### 3. Configure Prisma to work with Docker

In the `prisma/schema.prisma` file, we need to

- Add binaryTargets to the generator block. It will allow us to use the Prisma CLI inside the Docker container. You need to your binaryTargets specific to your OS and architecture. For example, for M1 Mac, I use "linux-musl-arm64-openssl-3.0.x". To support other OS and architectures, you need to add them to the binaryTargets array. More about binaryTargets [here](https://www.prisma.io/docs/orm/reference/prisma-schema-reference#binarytargets-options).
- change the provider from `sqlite` to `postgresql`:

```prisma
generator client {
    provider      = "prisma-client-js"
    binaryTargets = ["native", "linux-musl-arm64-openssl-3.0.x", "linux-musl-openssl-3.0.x", "rhel-openssl-1.0.x"]
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

```

### 4. Create a Dockerfile for the Next.js application

Inside the `compose` folder, create a file called `web.Dockerfile` with the following content:

```dockerfile
FROM node:18-alpine

RUN mkdir app

COPY ../prisma ./app
COPY ../package.json ./app
COPY ../package-lock.json ./app
WORKDIR /app

RUN npm ci
RUN npm install next -g

CMD ["npm", "run", "dev"]
```

We will use the `node:18-alpine` image as a base image. It is a lightweight image that contains Node.js 18 and npm. We will copy the `/prisma` folder, `package.json` and `package-lock.json` files to the `/app` folder and run `npm ci` to install the dependencies.

Using 'clean install' (`npm ci`) instead of 'install' (`npm i`) is a good practice for Docker images. It will ensure that the dependencies are installed from the `package-lock.json` file and not from the node_modules cache. This is faster than 'install', which is especially important for CI/CD pipelines where you want to keep the build time as short as possible.

### 5. Create a docker-compose.yml file

References and further reading:

- [Containerize T3 stack and deploy it as a single container using Docker]https://create.t3.gg/en/deployment/docker
- [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying#docker-image)
- [Official Next.js Docker example](https://github.com/vercel/next.js/tree/canary/examples/with-docker)
- [How to use .dockerignore and its importance](https://shisho.dev/blog/posts/how-to-use-dockerignore)
- [Securing Docker Builds: A Comprehensive Guide to .dockerignore Usage and Best Practices](https://www.linkedin.com/pulse/securing-docker-builds-comprehensive-guide-usage-best-ilyas-ou-sbaa/)
