const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5030; // Use process.env.PORT if available, otherwise use 5016

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const routes = require("./routes");
routes(app);

// Start the server
app.listen(PORT, () => {
  console.info(
    `⚡️[Exchange's rate server]: Server is running at http://localhost:${PORT}`
  );
});
