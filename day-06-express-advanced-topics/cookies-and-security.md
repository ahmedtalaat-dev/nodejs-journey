# 🍪 Cookies & Express Security

Today I learned how cookies work in Express and how middleware can be used to improve application security.

## 🍪 What are Cookies?

Cookies are small pieces of data stored by the browser.

The server can create a cookie and send it to the browser.

Example:

```javascript
res.cookie("username", "Ahmed");
```

The browser then stores the cookie and sends it back with future requests.

## 🔐 Creating Cookies

Example:

```javascript
app.get("/login", (req, res) => {
  res.cookie("username", "Ahmed");
  res.send("Cookie created");
});
```

## 🔒 HTTPOnly Property

The httpOnly option prevents client-side JavaScript from accessing the cookie.

Example:

```javascript
res.cookie("token", "123456", {
  httpOnly: true,
});
```
This can help reduce the risk of client-side JavaScript accessing sensitive cookie values.

## 📦 cookie-parser

cookie-parser is third-party Express middleware that makes it easier to work with cookies.

Install it:

```bash
npm install cookie-parser
```

Use it:

```javascript
const cookieParser = require("cookie-parser");

app.use(cookieParser());
```

Now cookies can be accessed through:

```javascript
req.cookies
```

Example:

```javascript
app.get("/profile", (req, res) => {
  console.log(req.cookies);

  res.send("Profile");
});
```

## 🛡️ helmet

helmet is third-party middleware that helps improve Express application security by setting various HTTP response headers.

Install it:

```bash
npm install helmet
```

Use it:

```javascript
const helmet = require("helmet");

app.use(helmet());
```

## 🔐 Example

```javascript
const express = require("express");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");

const app = express();

app.use(cookieParser());
app.use(helmet());

app.get("/", (req, res) => {
  res.cookie("username", "Ahmed", {
    httpOnly: true,
  });

  res.send("Cookie created");
});

app.listen(3000);
```
