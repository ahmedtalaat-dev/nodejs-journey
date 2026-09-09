# 🚀 Day 05 — Validation with AJV

Today I learned how to validate data in Node.js using **AJV (Another JSON Schema Validator)**.

## 📚 What I Learned

- What data validation means
- What AJV is
- Installing AJV
- Creating a JSON Schema
- Validating objects using AJV
- Checking required fields
- Checking data types
- Handling validation errors

## 🔍 What is Validation?

Validation is the process of checking whether the received data follows the rules we expect.

For example, a student object might need:

- `name` → string
- `age` → number
- `email` → string
- `id` → number

If the data does not follow these rules, we can reject it.

## 📦 What is AJV?

**AJV** stands for **Another JSON Schema Validator**.

It is a JavaScript library used to validate data against a **JSON Schema**.

## ⚙️ Install AJV

```bash
npm install ajv
```

🧩 Basic Example
```bash
const Ajv = require("ajv");

const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    age: {
      type: "number",
    },
  },
  required: ["name", "age"],
  additionalProperties: false,
};

const validate = ajv.compile(schema);

const student = {
  name: "Ahmed",
  age: 21,
};

const valid = validate(student);

console.log(valid);

if (!valid) {
  console.log(validate.errors);
}
```


## 📋 JSON Schema
A schema defines the rules that our data must follow.

Example:

```bash
const schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    age: {
      type: "number",
    },
  },
  required: ["name", "age"],
  additionalProperties: false,
};
```

## Important Properties

| Property | Purpose |
|----------|---------|
| `type` | Defines the data type |
| `properties` | Defines object fields |
| `required` | Defines required fields |
| `additionalProperties` | Controls extra fields |


## ❌ Invalid Data Example

```bash
const student = {
  name: "Ahmed",
  age: "21",
};
```
The age field is a string instead of a number, so AJV will consider the data invalid.

```bash
const valid = validate(student);

console.log(valid);
if (!valid) {
  console.log(validate.errors);
}
```
