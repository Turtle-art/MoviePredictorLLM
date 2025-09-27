# 🎬 MoviePredictorLLM

An application that predicts a movie’s **genre** and **description** given only its name.
Built with:

* **Ollama LLM** for generating predictions
* **SQLite** for lightweight data storage
* **Node.js (Express)** backend for API handling
* **React** frontend for an interactive UI

---

## Features

* Input a movie title and get a **predicted genre** and **description**.
* Uses **Ollama LLM** for natural language generation.
* Persists results in a **SQLite database** for later retrieval.
* Simple **REST API** with Node.js backend.
* Modern **React frontend** for a clean user interface.

---

## Tech Stack

* **Frontend:** React, Axios, Tailwind (optional for styling)
* **Backend:** Node.js, Express, SQLite3
* **LLM Integration:** Ollama LLM
* **Database:** SQLite

---

## Future Improvements

* Add **search** and **filter** for past predictions.
* Support multiple **LLM providers** (e.g., OpenAI, Anthropic).
* Add **user authentication** for saved histories.
* Deploy backend + frontend to the cloud (Vercel).
* Convert it into a RAG
