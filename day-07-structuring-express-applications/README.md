# 🚀 Day 07 — Structuring Express Applications

Today I learned how to properly structure an Express.js application.

The goal is to separate the application into different parts instead of putting everything inside one `app.js` file.

## 📚 Topics Covered

- Structuring Express Applications
- Routes
- Middlewares
- Utils
- MVC Pattern
- Controllers
- Models
- Data
- Working with Data Files

## 🏗️ Why Structure an Express Application?

As an application becomes larger, keeping all the code inside one file becomes difficult to maintain.

Instead, we can separate our application into different parts:

```text
Routes
   ↓
Middleware
   ↓
Controllers
   ↓
Models
   ↓
Data
```

This makes the application:

- Easier to understand
- Easier to maintain
- Easier to test
- Easier to extend

## 📂 Project Structure
```text
day-07-structuring-express-applications/
├── README.md
├── 01-routes/
│   └── README.md
├── 02-middlewares/
│   └── README.md
├── 03-utils/
│   └── README.md
├── 04-mvc-pattern/
│   └── README.md
├── 05-controllers/
│   └── README.md
├── 06-models/
│   └── README.md
├── 07-data/
│   └── README.md
└── 08-data-files/
    └── README.md
```

## 🧠 MVC

I learned about the MVC (Model-View-Controller) pattern.

| Part | Purpose |
|------|---------|
| Model | Handles data and data-related logic |
| View | Handles what the user sees |
| Controller | Handles application logic and requests |
