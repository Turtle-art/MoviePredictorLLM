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
      model: "tinyllama", // Replace with your desired model
      messages: [
        {
          role: "user",
          content: `Given the movie title "${name}", predict its genre and provide a short description.`,
        },
      ],
    });

    const output = response.message?.content || "No response";

    res.json({ movie: name, result: output });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
