const uploadFile = (req, res) => {
  res.json({
    message: "File uploaded successfully",
    file: req.file,
  });
};

module.exports = {
  uploadFile,
};
