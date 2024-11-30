const express = require("express");
const cors = require("cors");
const db = require("./db"); // Import the SQLite database
const app = express();
const port = 5000;

app.use(express.json());

// Enable CORS for all routes
app.use(
  cors({
    origin: "http://localhost:3000", // Allow only the frontend app running on localhost:3000
    methods: ["GET", "POST"], // Allow specific methods (GET, POST, etc.)
    allowedHeaders: ["Content-Type"], // Allow specific headers (Content-Type is required for POST requests)
  })
);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS Users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      message TEXT,
      date DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS Emails (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE
    )
  `);
});

// Example route to get all users
app.get("/api/users", (req, res) => {
  db.all("SELECT * FROM Users", (err, rows) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json(rows);
  });
});

// Example route to get all emails
app.get("/api/emails", (req, res) => {
  db.all("SELECT * from Emails", (err, rows) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json(rows);
  });
});

// POST route to add a new user
app.post("/api/users", (req, res) => {
  const { name, email, message } = req.body; // Destructure data from the request body

  // Check if the email already exists in the Emails table
  db.get("SELECT id FROM Emails WHERE email = ?", [email], (err, row) => {
    if (err) {
      return res.status(500).send(err.message);
    }

    // If email doesn't exist, insert it into the Emails table
    if (!row) {
      const insertEmailStmt = db.prepare(
        "INSERT INTO Emails (email) VALUES (?)"
      );
      insertEmailStmt.run(email, (err) => {
        if (err) {
          return res.status(500).send(err.message);
        }
        console.log("Email inserted into Emails table.");
      });
      insertEmailStmt.finalize();
    }

    // Insert user data into the Users table
    const insertUserStmt = db.prepare(
      "INSERT INTO Users (name, email, message, date) VALUES (?, ?, ?, CURRENT_TIMESTAMP)"
    );
    insertUserStmt.run(name, email, message, function (err) {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.status(201).json({
        id: this.lastID, // Include the generated ID of the new user entry
        name,
        email,
        message,
      });
    });
    insertUserStmt.finalize();
  });
});

// POST route to add a new email directly (for email-only submissions)
app.post("/api/emails", (req, res) => {
  const { email } = req.body; // Get the email from the request body

  // Check if the email already exists in the Emails table
  db.get("SELECT id FROM Emails WHERE email = ?", [email], (err, row) => {
    if (err) {
      return res.status(500).send(err.message);
    }

    // If email exists, return a message
    if (row) {
      return res
        .status(400)
        .json({ error: "Email already exists in the database" });
    }

    // If email doesn't exist, insert it into the Emails table
    const insertEmailStmt = db.prepare("INSERT INTO Emails (email) VALUES (?)");
    insertEmailStmt.run(email, function (err) {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.status(201).json({ id: this.lastID, email });
    });
    insertEmailStmt.finalize();
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
