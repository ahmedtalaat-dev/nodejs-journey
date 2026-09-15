# Lesson 1 — Register and Login

## 📌 What is Authentication?

**Authentication** is the process of verifying the identity of a user.

For example, when a user logs in with an email and password, the server checks whether the credentials are correct.

Authentication answers:

> **Who are you?**

---

## 📝 User Registration

Registration is the process of creating a new user account.

A typical registration flow:

```text
User
  │
  ▼
Send Email + Password
  │
  ▼
Validate Data
  │
  ▼
Check if User Exists
  │
  ▼
Hash Password
  │
  ▼
Create User
```

### Example

```http
POST /register
```

The client sends information such as:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

The server validates the data and creates the user.

---

## 🔑 Passwords

Passwords should **never be stored as plain text**.

Instead, passwords should be hashed before being stored in the database.

```text
Plain Password
      │
      ▼
    Hash
      │
      ▼
Database
```

---

## 🔓 User Login

Login is used by an existing user to authenticate.

Typical login flow:

```text
User
  │
  ▼
Send Email + Password
  │
  ▼
Find User
  │
  ▼
Compare Password
  │
  ▼
Credentials Correct?
  │
  ▼
Generate Authentication Token
```

### Example

```http
POST /login
```

Request:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

If the credentials are correct, the server can generate a JWT.

---

## 🔐 Authentication vs Authorization

### Authentication

Checks the user's identity.

```text
"Who are you?"
```

### Authorization

Checks what the authenticated user is allowed to do.

```text
"What are you allowed to access?"
```

---

## 🎯 What I Learned

* Authentication verifies user identity.
* Registration creates a new user account.
* Login verifies user credentials.
* Passwords should be securely hashed.
* Successful login can result in a JWT being generated.
