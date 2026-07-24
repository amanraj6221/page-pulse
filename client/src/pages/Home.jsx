
import { useState } from "react";
import UrlForm from "../components/UrlForm";
import ResultCard from "../components/ResultCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { analyzeWebsite } from "../services/api";

function Home() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (url) => {
    try {
      setLoading(true);
      setResult(null);

      const response = await analyzeWebsite(url);

      setResult(response);
    } catch (err) {
      alert(
        err.response?.data?.message ||
        "Unable to analyze this website."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="glass-card">

        <div className="hero">
          <h1> Page Pulse</h1>

          <p>
            Analyze Website Performance, SEO & Accessibility
            in Seconds.
          </p>
        </div>

        <UrlForm
          onAnalyze={handleAnalyze}
          loading={loading}
        />

        {loading && <LoadingSpinner />}

        {!loading && result && (
          <ResultCard result={result} />
        )}

        <footer className="footer">
          <p>
            Built for <strong>Digital Heroes Training Task</strong>
          </p>

          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noreferrer"
          >
            Visit Digital Heroes →
          </a>
        </footer>

      </div>
    </div>
  );
}

export default Home;

