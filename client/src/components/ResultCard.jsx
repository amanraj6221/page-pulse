
function ResultCard({ result }) {
  if (!result) return null;

  const data = result.data;

  return (
    <div style={{ marginTop: "20px", border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
      <h2>Analysis Result</h2>

      <p><strong>HTTP Status:</strong> {data.status}</p>

      <p><strong>Response Time:</strong> {data.responseTime}</p>

      <p><strong>Title:</strong> {data.title}</p>

      <p><strong>Meta Description:</strong> {data.metaDescription}</p>

      <p><strong>H1 Count:</strong> {data.h1Count}</p>

      <p><strong>Images Missing Alt:</strong> {data.imagesMissingAlt}</p>

      <p><strong>Word Count:</strong> {data.wordCount}</p>
    </div>
  );
}

export default ResultCard;

