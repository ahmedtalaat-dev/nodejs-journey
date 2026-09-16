# 🚀 Day 11 — Authorization

Today I learned about **Authorization** in Node.js and Express.js.

Authorization is used to determine what an authenticated user is allowed to access or perform.

## 🔐 Authentication vs Authorization

Authentication and authorization are related but different concepts.

| Concept | Purpose |
|---------|---------|
| Authentication | Determines who the user is |
| Authorization | Determines what the user is allowed to do |

### Example

A user logs into an application.

```text
Authentication
      ↓
Who are you?
      ↓
Ahmed
```

After the user is authenticated, authorization determines what Ahmed can access.

```text
Authorization
      ↓
What can Ahmed do?
      ↓
Read students
Create students
Delete students
```

## 📚 What I Learned
- What authorization means
- Authentication vs authorization
- Roles
- Permissions
- Authorization middleware
- Protecting routes
- Role-based authorization
- Using middleware to control access

## 👥 Roles
A user can have a role that determines what they are allowed to do.

### For example:

- Admin
- Teacher
- Student

### Example:

| Role | Permission |
| ---- | --------- |
| Admin |	Create, read, update, delete |
| Teacher |	Create, read, update |
| Student |	Read |

## 🔄 Authorization Flow

```text
Request
   ↓
Authentication
   ↓
Is the user logged in?
   ↓
Authorization
   ↓
Does the user have permission?
   ↓
Controller
   ↓
Response
```

## 🛡️ Authorization Middleware

Authorization can be implemented using middleware.

### Example:

```javascript
const authorize = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Access denied",
    });
  }

  next();
};
```

Then protect a route:

```javascript
router.delete(
  "/students/:id",
  authorize,
  deleteStudent
);
```
Only users with the required role can access the route.

## 📂 Project Structure

```text
day-11-authorization/
├── README.md
├── middleware/
│   └── authorize.js
├── controllers/
│   └── userController.js
└── routes/
    └── users.js
```
