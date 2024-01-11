---
title: "Building a Local Development Environment: Running a Next.js Full-Stack Application with PostgreSQL and Minio S3 Using Docker-Compose: Building the App
"
excerpt: "In this article, we will build a full-stack application using Next.js, PostgreSQL, and Minio S3."
coverImage: "/blog/nextjs-postgres-s3-locally/cover.png"
date: "2024-06-01"
ogImage:
  url: "/blog/nextjs-postgres-s3-locally/cover.png"
---

The application we will build is a simple file storage application. Users will be able to upload files to the application, and the application will store the files in a PostgreSQL database and Minio S3.

### 1. Frontend - Update the Next.js page to upload files

First, we will update the Next.js page to upload files. We will use the [react-dropzone](https://react-dropzone.js.org/) library to upload files.

```bash
npm install react-dropzone
```

Next, we will update the `pages/index.js` file to upload files.

```tsx
import React, { useCallback, useState } from "react";
```

### 2. Backend

#### 2.1 Create utility functions to upload files to Minio S3

First, we will create utility functions to upload files to Minio S3. We will use the [minio](https://www.npmjs.com/package/minio) library to upload files. And axios to download files

```bash
npm install minio
```

Then create a `utils` folder in the `src` folder. And create a `s3-file-management.ts` file in the `utils` folder that contains the necessary utility functions for uploading and downloading files

#### 2.3 Create database models

To store files in the database, we will create a `File` model in the database.

```prisma
model File {
    id           String   @id @default(uuid())
    createdAt    DateTime @default(now())
    originalName String
    bucket       String
    fileName     String
    size         Int
    type         String
}
```

After creating the model, we need to apply the changes to the database. We can do this using `db push` or `db migrate` command, the difference between the two commands is that `db push` will drop the database and recreate it, while `db migrate` will only apply the changes to the database. More information about the commands can be found in [Prisma docs](https://www.prisma.io/docs/orm/prisma-migrate/workflows/prototyping-your-schema#choosing-db-push-or-prisma-migrate). In our case it doesn't matter which command we use, so we will use `db push` command.

Considering that we have are running the application in docker containers, we will need to run the `db push` command in the `web` container. To do this, we will use the `docker-compose exec` command.

```bash
docker-compose -f compose/docker-compose.yml exec -t web npx prisma db push

# or
docker-compose -f compose/docker-compose.yml exec -t web npx prisma migrate dev --name init
```

#### 2.3 Create an API route to upload files

Install Minio S3 client for Node.js.

```bash
npm install minio
```

Next, we will create an API endpoint to upload files. We will use the [multer](https://www.npmjs.com/package/multer) library to upload files.

```

```

### References and Further Reading

[Upload files with NextJS + Fetch + Api routes + Typescript](https://devpress.csdn.net/react/62eb6bd020df032da732b2ea.html)
[Minio Docs](https://docs.min.io/docs/javascript-client-api-reference.html)
