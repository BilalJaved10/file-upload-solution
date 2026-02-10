const fs = require("fs");
const path = require("path");

/* ===================== UPLOAD ===================== */
exports.uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  res.json({
    message: "Uploaded successfully",
    filename: req.file.filename,
    url: `/uploads/${req.file.filename}`,
  });
};


/* ===================== GET FILES ===================== */
exports.getFiles = (req, res) => {
  const uploadPath = path.join(__dirname, "../uploads");

  fs.readdir(uploadPath, (err, files) => {
    if (err) return res.status(500).json([]);

    const fileList = files.map((file) => ({
      filename: file,
      url: `/uploads/${file}`,
    }));

    res.json(fileList);
  });
};


/* ===================== DELETE ===================== */
exports.deleteFile = (req, res) => {
  const filename = decodeURIComponent(req.params.filename);

  const filePath = path.join(__dirname, "../uploads", filename);

  fs.unlink(filePath, (err) => {
    if (err) {
      return res.status(500).json({ message: "Delete failed" });
    }

    res.json({ message: "Deleted successfully" });
  });
};
