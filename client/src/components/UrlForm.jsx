
import { useState } from "react";

function UrlForm({ onAnalyze, loading }) {

  const [url, setUrl] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!url.trim()) {
      alert("Please enter a website URL");
      return;
    }

    onAnalyze(url);
  };

  return (
    <form
      className="url-form"
      onSubmit={submitHandler}
    >

      <input
        type="url"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />

      <button
        type="submit"
        disabled={loading}
      >
        {loading ? "Analyzing..." : " Analyze Website"}
      </button>

    </form>
  );
}

export default UrlForm;
