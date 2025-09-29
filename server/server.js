const express = require("express");
const bodyParser = require("body-parser");
const ollama = require("ollama");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post("/api/movie", async (req, res) => {
  try {
    const client = new ollama.Ollama();
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Movie name is required" });
    }

    const response = await client.chat({
      model: "tinyllama", // Replace with a better model
      messages: [
        {
          role: "user",
          content: `Given the movie title "${name}", respond ONLY with a single JSON object, nothing else. 
            The object MUST have exactly these keys:
            {
              "genre": "Single genre only (like Action, Comedy, Drama, Sci-Fi, etc.)",
              "description": "One-sentence description"
            }`,
        },
      ],
    });

    let rawOutput = response.message?.content || "{}";
    const match = rawOutput.match(/\{[\s\S]*?\}/);
    if (match) {
      rawOutput = match[0];
    }

    let parsed;
    try {
      parsed = JSON.parse(rawOutput);
    } catch (err) {
      console.warn("Failed JSON parse, fallback:", rawOutput);
      parsed = {};
    }

    const genre = parsed.genre || "Unknown";
    const description = parsed.description || "No description available";

    res.json({
      movie: name,
      genre,
      description,
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
