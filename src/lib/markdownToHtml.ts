import { unified } from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import javascript from "highlight.js/lib/languages/javascript";

export default async function markdownToHtml(markdownString: string) {
  const result = await unified()
    .use(markdown)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(rehypeHighlight, { languages: { javascript } })
    .use(html, { allowDangerousHtml: true })
    .process(markdownString);
  return result.toString();
}
