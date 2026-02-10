const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const fileRoutes = require("./routes/fileRoutes");

const app = express();

app.use(cors());
app.use(express.json());

/* ensure uploads folder exists */
const uploadPath = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

/* serve uploaded files */
app.use("/uploads", express.static(uploadPath));

app.use("/api/files", fileRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
