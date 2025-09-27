const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api", (req, res) => {
  res.json({ "users": ["user1", "user2", "user3"] });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
