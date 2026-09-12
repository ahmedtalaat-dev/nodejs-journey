# 💾 Application Data

Applications need data to work with.

For example, a student application may have:

```javascript
const students = [
  {
    id: 1,
    name: "Ahmed",
    age: 21,
  },
  {
    id: 2,
    name: "Ali",
    age: 21,
  },
];
```

## 📚 Data in an Express Application

Data can come from different sources:

- JavaScript arrays
- JSON files
- Databases
- External APIs

During development, we can start with simple arrays or files.

## 🧩 Separating Data

Instead of keeping data inside app.js, we can create a separate location for it.

Example:

```javascript
data/
└── students.js
```
Then import it when needed:

```javascript
const students = require("./data/students");
```

## 🧠 Why Separate Data?

Separating data from application logic helps us:

- Keep files organized
- Separate responsibilities
- Make data easier to manage
- Prepare the project for a database later
