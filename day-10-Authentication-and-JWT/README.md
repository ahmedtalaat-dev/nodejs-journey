# Day 10 — Authentication and JWT

Today I learned the basics of **Authentication** and **JWT (JSON Web Token)**.

The main goal was to understand how users can register, log in, receive a JWT token, and use that token to access protected routes.

## 📚 What I Learned

* What Authentication means
* What Authorization means
* User Registration
* User Login
* Password verification
* What JWT is
* JWT structure
* Creating JWT tokens
* Verifying JWT tokens
* Sending JWT with requests
* Protecting routes with authentication
* Basic authentication flow

## 📂 Lessons

### Lesson 1 — Register and Login

Learned how user registration and login work.

**Commit:**

```bash
git commit -m "learn user registration and login"
```

### Lesson 2 — JWT

Learned what JWT is, how it works, and how it can be used for authentication.

**Commit:**

```bash
git commit -m "learn JWT authentication"
```

### Lesson 3 — Authentication Flow

Learned how registration, login, JWT generation, JWT verification, and protected routes work together.

**Commit:**

```bash
git commit -m "learn authentication flow with JWT"
```

## 🔐 Authentication Flow

```text
User
  │
  ▼
Register
  │
  ▼
Create Account
  │
  ▼
Login
  │
  ▼
Verify Credentials
  │
  ▼
Generate JWT
  │
  ▼
Send JWT to Client
  │
  ▼
Client Sends JWT
  │
  ▼
Verify JWT
  │
  ▼
Access Protected Route
```

## 🎯 Day 10 Goal

Understand the basic concepts of authentication and JWT and how they are used to secure backend applications and APIs.

## 💡 Key Difference

**Authentication** answers:

> Who are you?

**Authorization** answers:

> What are you allowed to access?

## 📝 Summary

Today I learned how authentication works from registration and login to JWT-based authentication.

I also learned that JWT can be used to identify authenticated users when they access protected resources.
