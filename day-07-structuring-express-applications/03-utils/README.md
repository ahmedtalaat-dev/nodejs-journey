# 🛠️ Utils

Utils, or utility functions, are reusable functions that help us avoid repeating code.

## 📚 What are Utils?

A utility function performs a small, reusable task.

Example:

```javascript
const generateId = (items) => {
  return items.length + 1;
};

module.exports = generateId;
```

We can use it in another file:

```javascript
const generateId = require("./utils/generateId");

const id = generateId(students);
```

## 📁 Example Structure

```javascript
utils/
└── generateId.js
```

## 🧠 Why Use Utils?

Utility functions help us:

- Avoid duplicated code
- Reuse common functionality
- Keep controllers and routes clean
- Organize helper functions

## ✅ Key Takeaway

Utils contain reusable helper functions that can be used by different parts of the application.
