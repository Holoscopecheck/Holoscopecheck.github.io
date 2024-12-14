const articles = [
  {
    id: 1,
    title: "PythonのnetworkxでDFA(決定性有限オートマトン)の可視化をやってみた",
  },
  {
    id: 2,
    title:
      "Pythonで最簡形のDFA(決定性有限オートマトン)をに変換するプログラム書いてみた",
  },
  { id: 3, title: "PythonでできることはNimにもできるぞ" },
];

export function ContentsList() {
  return (
    <>
      <div>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <a href={`/contents/${article.id}`}>{article.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
