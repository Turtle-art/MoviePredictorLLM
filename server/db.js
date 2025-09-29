// db.js
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./db/movies.db", (err) => {
  if (err) {
    console.error("Error opening database:", err);
  } else {
    console.log("Connected to SQLite database.");

    db.run(
      `CREATE TABLE IF NOT EXISTS movies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        genre TEXT,
        description TEXT
      )`,
      (err) => {
        if (err) {
          console.error("Error creating table:", err);
        } else {
          console.log("Movies table ready.");
        }
      }
    );
  }
});

module.exports = db;