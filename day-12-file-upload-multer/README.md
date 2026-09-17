# 📁 Day 12 — File Upload with Multer

Today I learned how to upload files in an Express.js application using Multer.

## 📚 Topics Learned

- What file upload means
- What Multer is
- Installing Multer
- Configuring Multer
- Uploading a single file
- Uploading multiple files
- Using `req.file`
- Using `req.files`
- Creating upload middleware
- Creating upload routes
- Handling uploaded files

## 📦 What is Multer?

Multer is a Node.js middleware used for handling `multipart/form-data`.

It is commonly used for uploading files through Express.js applications.

## 🔧 Installation

```bash
npm install multer
```

## 📂 Project Structure

```bash
day-12-file-upload-multer/
├── README.md
├── package.json
├── app.js
├── middleware/
│   └── upload.js
├── controllers/
│   └── uploadController.js
└── routes/
    └── upload.js
```

## 📤 Single File Upload

```javascript
router.post("/", upload.single("file"), uploadFile);

upload.single("file") is used when the request contains one file.
```

The uploaded file is available through:

```javascript
req.file
```

## 📤 Multiple File Upload

```javascript
router.post("/multiple", upload.array("files", 5), (req, res) => {
  res.json({
    message: "Files uploaded successfully",
    files: req.files,
  });
});
```

The uploaded files are available through:

```javascript
req.files
```

## 🔄 Upload Flow

```bash
Client
   ↓
POST Request
   ↓
Multer Middleware
   ↓
File Processing
   ↓
Controller
   ↓
Response
```
