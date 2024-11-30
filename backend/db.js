const sqlite3 = require("sqlite3").verbose(); // Import SQLite3 module
const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error("Error opening database", err);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

db.serialize(() => {
  // Create the Users table if it does not already exist
  db.run(
    "CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY, name TEXT, email TEXT, message TEXT, date DATETIME)"
  );
});

module.exports = db;
