# 🎨 Templating Engines & Application Settings

Today I learned about templating engines, EJS, and Express application settings.

## 🎨 What is a Templating Engine?

A templating engine allows us to generate dynamic HTML pages using data from our application.

Instead of writing completely static HTML, we can insert dynamic values into a template.

Some examples of templating engines are:

- EJS
- Pug
- Handlebars

## 📦 EJS

**EJS** stands for **Embedded JavaScript Templates**.

It allows us to write JavaScript inside HTML templates.

Install EJS:

```bash
npm install ejs
```

## ⚙️ Configure EJS

Tell Express to use EJS as the view engine:

```javascript
app.set("view engine", "ejs");
```

## 📁 Example Structure

```bash
project/
├── app.js
└── views/
    └── index.ejs
```

## 📝 Creating an EJS Template

views/index.ejs

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Home</title>
  </head>

  <body>
    <h1>Hello <%= name %></h1>
  </body>
</html>
```

## 🚀 Rendering an EJS Page

app.js

```javascript
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    name: "Ahmed",
  });
});

app.listen(3000);
```

The value:

```text
name: "Ahmed"
```
is available inside the EJS template.

This:

```javascript
<%= name %>
```

will output:

```text
Ahmed
```

## ⚙️ Express Application Settings

Express provides application settings that can be configured using:

```javascript
app.set()
```

Example:

```javascript
app.set("view engine", "ejs");
```
We can retrieve a setting using:

```javascript
app.get()
```

Example:

```javascript
console.log(app.get("view engine"));
```
