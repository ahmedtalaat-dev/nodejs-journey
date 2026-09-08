# 🚀 Day 04 — Introduction to Express.js

Today I started learning **Express.js** and how to build a simple REST API with CRUD operations.

## 📚 What I Learned

- What is Express.js?
- How to install Express.js
- How to create an Express server
- How to handle HTTP requests
- How to create routes
- HTTP methods
- CRUD operations
- How to send JSON responses
- How to work with route parameters
- How to create a simple REST API

---

## ⚡ What is Express.js?

**Express.js** is a fast and minimal **web framework for Node.js**.

It makes it easier to build:

- Web servers
- REST APIs
- Backend applications
- Web applications
- Middleware-based applications

Express.js is built on top of Node.js and provides useful features for handling HTTP requests, responses, routing, and middleware.

---

## 📦 Installing Express.js

Create a Node.js project:

```bash
npm init -y
```

Install Express:

```bash
npm install express
```
Express is now added as a dependency in package.json.

## 🚀 Creating an Express Server
A basic Express server looks like this:

```bash
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Express!");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
```

Run the server:

```bash
node app.js
```

Then open:

```bash
http://localhost:3000
```

## 🌐 HTTP Methods
HTTP methods describe the action we want to perform.

| Method | Purpose |
|--------|---------|
| GET | Get data |
| POST | Create data |
| PUT | Update data |
| PATCH | Partially update data |
| DELETE | Delete data |

## 🔄 CRUD Operations

CRUD stands for:

- C — Create
- R — Read
- U — Update
- D — Delete
CRUD is one of the fundamental concepts when building APIs.

### 🟢 Create
The Create operation is usually handled using the POST method.

Example:

```bash
app.post("/users", (req, res) => {
    res.send("User created");
});
```

### 🔵 Read
The Read operation is usually handled using the GET method.

Get all users:

```bash
app.get("/users", (req, res) => {
    res.json(users);
});
```

Get a specific user:

```bash
app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);

    const user = users.find((user) => user.id === id);

    res.json(user);
});
```

### 🟡 Update
The Update operation can be handled using PUT.

```bash
app.put("/users/:id", (req, res) => {
    const id = Number(req.params.id);

    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    user.name = req.body.name;

    res.json(user);
});
```

### 🔴 Delete
The Delete operation is handled using the DELETE method.

```bash
app.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id);

    users = users.filter((user) => user.id !== id);

    res.json({
        message: "User deleted"
    });
});
```
