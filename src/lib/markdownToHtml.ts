import { unified } from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import javascript from "highlight.js/lib/languages/javascript";
import remarkGfm from "remark-gfm";

export default async function markdownToHtml(markdownString: string) {
  const result = await unified()
    .use(markdown)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(rehypeHighlight, { languages: { javascript } })
    .use(html, { allowDangerousHtml: true })
    .use(remarkGfm)
    .process(markdownString);
  return result.toString();
}
