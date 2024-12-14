import matter from "gray-matter";

export async function loadMarkdown(filePath: string) {
  const response = await fetch(filePath);
  const text = await response.text();
  const { content, data } = matter(text);

  return { content, data };
}
