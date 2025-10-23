const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/health", (req, res) => {
  res.status(200).send("Server is running fine ✅");
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});