# 🎮 Controllers

Controllers contain the logic for handling requests and sending responses.

## 📚 What is a Controller?

Instead of writing all the logic directly inside routes, we can move it into controller functions.

### Without Controller

```javascript
app.get("/students", (req, res) => {
  res.json(students);
});
```

With Controller

Controller:

```javascript
const getStudents = (req, res) => {
  res.json(students);
};

module.exports = {
  getStudents,
};
```

Route:

```javascript
router.get("/", getStudents);
```

## 📁 Example Structure

```javascript
controllers/
└── studentController.js
```

## 🧠 Why Use Controllers?

Controllers help us:

- Keep routes clean
- Separate application logic
- Reuse functions
- Make the project easier to maintain

## 🔄 Request Flow

```javascript
Request
   ↓
Route
   ↓
Controller
   ↓
Response
```
