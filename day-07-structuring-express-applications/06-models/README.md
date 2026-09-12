# 🗃️ Models

Models are responsible for working with application data.

## 📚 What is a Model?

A Model represents the structure and operations related to a type of data.

For example, a Student Model can handle student data.

```javascript
const students = [
  {
    id: 1,
    name: "Ahmed",
    age: 21,
  },
];

module.exports = students;
```

## 📁 Example Structure

```javascript
models/
└── studentModel.js
```

## 🧠 Model Responsibilities

A model can contain operations such as:

- Get data
- Find data
- Create data
- Update data
- Delete data

## 🔄 MVC Flow

```javascript
Route
  ↓
Controller
  ↓
Model
  ↓
Data
```
