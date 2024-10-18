const express = require("express");
const app = express();
const postRoutes = require("./routes/postRoutes");
const postContentRoutes = require("./routes/postContentRoutes");
const cors = require("cors");

// Middleware
app.options(
  "*",
  cors({ origin: "http://localhost:5001", optionsSuccessStatus: 200 })
);
app.use(cors({ origin: "http://localhost:5001", optionsSuccessStatus: 200 }));
// app.use(cors());
app.use(express.json());

// Use the routes
app.use("/posts", postRoutes);
app.use("/post-content", postContentRoutes);

// Starting the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
