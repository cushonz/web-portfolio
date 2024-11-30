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

// Example route to get all users
app.get("/api/users", (req, res) => {
  db.all("SELECT * FROM Users", (err, rows) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json(rows);
  });
});

// Example route to add a new user
app.post("/api/users", (req, res) => {
  const { name, email, message } = req.body; // Destructure data from the request body

  // Prepare and run the SQL query to insert data into the database
  const stmt = db.prepare(
    "INSERT INTO Users (name, email, message,date) VALUES (?, ?, ?, CURRENT_TIMESTAMP)"
  );
  stmt.run(name, email, message, function (err) {
    if (err) {
      return res.status(500).send(err.message); // If there is an error, send an error response
    }
    res.status(201).json({ name, email, message }); // If success, return the data
  });
  stmt.finalize();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
