# 🔧 Express Middleware

Middleware is one of the most important concepts in Express.js.

## 📚 What is Middleware?

Middleware is a function that runs between receiving a request and sending a response.

A middleware function has access to:

```javascript
(req, res, next)
```
- req → Request object
- res → Response object
- next → Function used to move to the next middleware

Example:

```javascript
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
```

## 🔄 How Middleware Works
The request passes through middleware before reaching the final route handler.

```bash
Request
   ↓
Middleware
   ↓
Middleware
   ↓
Route Handler
   ↓
Response
```

## 🛣️ Route Handler Middleware
Middleware can be used directly inside a route.

```javascript
app.get(
  "/users",
  (req, res, next) => {
    console.log("Middleware");
    next();
  },
  (req, res) => {
    res.send("Users");
  }
);
```

## 🏗️ Built-in Middleware
Express provides built-in middleware.

```javascript
express.json()
```
Used to parse JSON request bodies.

```javascript
app.use(express.json());
```

```javascript
express.static()
```
Used to serve static files such as:

- HTML
- CSS
- JavaScript
- Images

Example:

```javascript
app.use(express.static("public"));
```

## 🛠️ Custom Middleware
We can create our own middleware.

```javascript
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);
```
This middleware logs the HTTP method and URL for every request.

## 📦 Third-party Middleware
Third-party middleware is middleware created by other developers and installed using npm.

Examples:

- cookie-parser
- helmet

Example:

```bash
npm install cookie-parser
```

## 🔢 Parameter Middleware
Parameter middleware runs when a specific route parameter is received.

Express provides:

```javascript
app.param()
```

Example:

```javascript
app.param("id", (req, res, next, id) => {
  console.log(`Student ID: ${id}`);
  next();
});

app.get("/students/:id", (req, res) => {
  res.send(`Student ${req.params.id}`);
});
```
