
function ResultCard({ result }) {
  if (!result) return null;

  const data = result.data;

  const cards = [
    { title: "HTTP Status", value: data.status },
    { title: "Response Time", value: data.responseTime },
    { title: "H1 Tags", value: data.h1Count },
    { title: "Images Missing Alt", value: data.imagesMissingAlt },
    { title: "Word Count", value: data.wordCount },
  ];

  return (
    <div className="results">

      <h2> Website Analysis</h2>

      <div className="grid">

        {cards.map((card) => (
          <div className="metric-card" key={card.title}>
            <span>{card.title}</span>
            <h3>{card.value}</h3>
          </div>
        ))}

      </div>

      <div className="meta-card">

        <h3>📄 Page Title</h3>

        <p>{data.title || "Not Available"}</p>

        <h3>📝 Meta Description</h3>

        <p>{data.metaDescription || "Not Available"}</p>

      </div>

    </div>
  );
}

export default ResultCard;

