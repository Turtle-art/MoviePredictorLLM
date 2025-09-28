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

## What is Ollama?

Ollama is a **local runtime for LLMs** — it lets you download, run, and manage large language models on your own machine. This gives you **privacy, control, and no per-request costs**, while still offering a simple CLI and API.

### Features

* Run LLMs locally (macOS, Linux, Windows support)
* Pull models easily (`ollama pull llama3`)
* Tool/function calling support
* Works with chat, completion, and embedding models
* Optimized with quantization for smaller memory use

### Supported Models

Ollama provides a library of open-source models such as:

* **Llama 3**
* **Mistral**
* **Gemma**
* Tool-enabled variants

### Pros & Cons

✅ Privacy, fast local inference, no API billing
⚠️ Requires good hardware, some features still experimental

---

## React Hooks: `useState` & `useEffect`

React Hooks let you use state and lifecycle features in functional components.

### `useState`

* Manages local component state.
* Returns `[value, setValue]`.
* Updating state triggers a re-render.

```js
const [count, setCount] = useState(0);
setCount(count + 1); // async + batched
```

* Initial value used **once** (on first render).
* Use updater form for safe updates:

```js
setCount(prev => prev + 1);
```

---

### `useEffect`

* Handles **side effects** (data fetching, subscriptions, DOM ops).
* Runs **after render**.

```js
useEffect(() => {
  // effect logic
  return () => { /* cleanup */ };
}, [deps]);
```

* **Dependency array**:

  * `[]` → only on mount/unmount
  * `[x]` → when `x` changes
  * none → every render

---

### Best Practices & Pitfalls

* **Always list dependencies** → missing deps cause stale values.
* **Don’t use hooks in loops/conditions** → must always run in same order.
* **Cleanup in effects** (unsubscribe, clear timers) to avoid memory leaks.
* **Avoid infinite loops** → happens if you update state unconditionally inside `useEffect`.
* **Split effects** → one effect per concern (e.g., fetch vs. event listener).
* **useState** updates are async → don’t rely on immediate value after `setState`.


