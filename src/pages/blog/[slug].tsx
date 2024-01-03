import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/blog/container";
import PostBody from "@/components/blog/post-body";
import Header from "@/components/blog/header";
import PostHeader from "@/components/blog/post-header";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "@/components/blog/post-title";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import type PostType from "../../interfaces/post";
import MoreStories from "@/components/blog/more-stories";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts }: Props) {
  const router = useRouter();
  const title = `${post.title} | Alex Efimenko personal blog`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Container>
      <Header />
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>{title}</title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
            />
            <PostBody content={post.content} />
          </article>
        </>
      )}
      {morePosts.length > 0 && (
        <div>
          <hr className="my-10 border-gray-200" />
          <MoreStories posts={morePosts} />
        </div>
      )}
    </Container>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);
  const morePosts = allPosts.filter((post) => post.slug !== params.slug);

  return {
    props: {
      morePosts,
      post: {
        ...post,
        content,
      },
    },
  };
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
