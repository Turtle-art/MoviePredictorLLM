import React, { useState } from "react";

function App() {
  const [movieName, setMovieName] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePredict = async () => {
    if (!movieName.trim()) {
      setError("Please enter a movie name.");
      return;
    }
    setError("");
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/movie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: movieName }),
      });

      const data = await res.json();
      if (res.ok) {
        setResult(data);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-6">🎬 Movie Predictor</h1>

        <input
          type="text"
          placeholder="Enter a movie name..."
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 mb-4"
        />

        <button
          onClick={handlePredict}
          disabled={loading}
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
        >
          {loading ? "Predicting..." : "Predict"}
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {result && (
          <div className="mt-6 text-left">
            <p>
              <strong>Movie:</strong> {result.movie}
            </p>
            <p>
              <strong>Genre:</strong>{" "}
              {result.genre || "Could not determine"}
            </p>
            <p>
              <strong>Description:</strong>{" "}
              {result.description || result.result}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;