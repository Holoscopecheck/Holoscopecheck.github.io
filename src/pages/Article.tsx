import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadMarkdown } from "../utils/loadMarkdown";
import ReactMarkdown from "react-markdown";

interface MarkdownData {
  content: string;
  data: {
    title: string;
  };
}

export function Article() {
  const { id } = useParams<{ id: string }>();
  const [markdownData, setMarkdownData] = useState<MarkdownData | null>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      const filePath = `/src/articles/article${id}.md`;
      const data = await loadMarkdown(filePath);
      setMarkdownData({
        content: data.content,
        data: {
          title: data.data.title,
        },
      });
    };

    fetchMarkdown();
  }, [id]);

  return (
    <>
      <div>
        {markdownData && (
          <>
            <h1>{markdownData.data.title}</h1>
            <ReactMarkdown>{markdownData.content}</ReactMarkdown>
          </>
        )}
      </div>
    </>
  );
}
