# 🏗️ MVC Pattern

MVC stands for:

**Model - View - Controller**

It is a design pattern used to organize application code.

## 📚 MVC Components

| Component | Purpose |
|-----------|---------|
| Model | Handles data and data-related logic |
| View | Handles the user interface |
| Controller | Handles requests and application logic |

## 🧩 Model

The Model is responsible for working with data.

Examples:

- Getting data
- Creating data
- Updating data
- Deleting data

## 🎮 Controller

The Controller handles incoming requests and decides what should happen.

Example:

```javascript
const getStudents = (req, res) => {
  res.json(students);
};
```

## 👀 View

The View represents what the user sees.

For an Express application using EJS, the View can be an .ejs file.

## 🔄 MVC Flow

```javascript
Client
  ↓
Route
  ↓
Controller
  ↓
Model
  ↓
Data
  ↓
Controller
  ↓
Response / View
```

## 🧠 Why MVC?

MVC helps us:

- Separate responsibilities
- Organize code
- Make applications easier to maintain
- Make large applications easier to understand
