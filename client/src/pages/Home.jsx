
import { useState } from "react";
import UrlForm from "../components/UrlForm";
import ResultCard from "../components/ResultCard";
import { analyzeWebsite } from "../services/api";

function Home() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (url) => {
    try {
      setLoading(true);

      const data = await analyzeWebsite(url);

      setResult(data);
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "50px auto",
        padding: "20px",
      }}
    >
      <h1>Page Pulse</h1>

      <p>Analyze any website instantly.</p>

      <UrlForm
        onAnalyze={handleAnalyze}
        loading={loading}
      />

      <ResultCard result={result} />
    </div>
  );
}

export default Home;
