# 🔧 Structuring Middlewares

Middleware functions run during the request-response cycle.

## 📚 Middleware

A middleware function usually has:

```javascript
(req, res, next)

Example:

const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};
```

We can use it with:

```javascript
app.use(logger);
```

## 🏗️ Separating Middleware

Instead of keeping middleware inside app.js, we can create a separate folder.

Example:

```javascript
middlewares/
└── logger.js
```

logger.js:

```javascript
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

module.exports = logger;
```

Then:

```javascript
const logger = require("./middlewares/logger");

app.use(logger);
```

## 🧠 Why Separate Middleware?

Separating middleware helps us:

- Keep app.js clean
- Reuse middleware
- Organize application logic
- Maintain the project more easily

## 🔄 Flow
```javascript
Request
   ↓
Middleware
   ↓
Route
   ↓
Controller
   ↓
Response
```
