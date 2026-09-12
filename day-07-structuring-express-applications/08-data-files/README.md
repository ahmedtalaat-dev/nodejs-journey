# 📄 Working with Data Files

Data can be stored in files instead of directly inside JavaScript code.

A common format is **JSON**.

## 📦 JSON Data

Example:

```json
[
  {
    "id": 1,
    "name": "Ahmed",
    "age": 21
  },
  {
    "id": 2,
    "name": "Ali",
    "age": 21
  }
]
```

## 📁 Example Structure

```text
data/
└── students.json
```

## 📖 Reading a JSON File

Node.js provides the fs module for working with files.

Example:

```javascript
const fs = require("fs");

const data = fs.readFileSync("./data/students.json", "utf-8");

const students = JSON.parse(data);

console.log(students);
```

## 🔄 JSON.parse()

JSON.parse() converts JSON text into a JavaScript value.

```javascript
const data = '{"name":"Ahmed"}';

const student = JSON.parse(data);

console.log(student.name);
```

## 📝 JSON.stringify()

JSON.stringify() converts a JavaScript value into JSON text.

```javascript
const student = {
  name: "Ahmed",
  age: 21,
};

const data = JSON.stringify(student);

console.log(data);
```

## ✏️ Writing to a File

We can use fs.writeFileSync() to write data to a file.

```javascript
const fs = require("fs");

const students = [
  {
    id: 1,
    name: "Ahmed",
    age: 21,
  },
];

fs.writeFileSync(
  "./data/students.json",
  JSON.stringify(students, null, 2)
);
```

## 🧠 Key Takeaways
- JSON is commonly used for storing structured data.
- JSON.parse() converts JSON into JavaScript data.
- JSON.stringify() converts JavaScript data into JSON.
- Node.js fs can read and write files.
- Data files can be used as simple storage during development.
