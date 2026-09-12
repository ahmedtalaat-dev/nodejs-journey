# 🛣️ Routes

Routes define how an Express application responds to different HTTP requests and URLs.

## 📚 What is a Route?

A route defines:

- HTTP method
- URL path
- Handler function

Example:

```javascript
app.get("/api/students", (req, res) => {
  res.json(students);
});
```

Here:

- GET → HTTP method
- /api/students → URL
- callback → route handler

## 🔀 Express Router

When an application becomes larger, we can move routes into separate files using express.Router().

Example:

```javascript
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Students");
});

module.exports = router;
```

Then use the router in app.js:

```javascript
const studentRoutes = require("./routes/students");

app.use("/api/students", studentRoutes);
```

## 🧠 Why Separate Routes?

Separating routes from app.js makes the application:

- Cleaner
- Easier to maintain
- Easier to understand
- Easier to extend

## 🔄 Request Flow
```text
Request
   ↓
Router
   ↓
Route Handler
   ↓
Response
```

## ✅ Key Takeaways
- Routes define application endpoints.
- express.Router() helps organize routes.
- Routes should be separated as the application grows.
