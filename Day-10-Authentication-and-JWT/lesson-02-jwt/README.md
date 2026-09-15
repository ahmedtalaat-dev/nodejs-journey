# Lesson 2 — JWT Authentication

## 📌 What is JWT?

**JWT** stands for **JSON Web Token**.

JWT is a token format commonly used to authenticate users and securely transfer information between a client and server.

---

## 🧩 JWT Structure

A JWT consists of three parts:

```text
Header.Payload.Signature
```

For example:

```text
xxxxx.yyyyy.zzzzz
```

### 1. Header

Contains information about the token, such as the signing algorithm.

### 2. Payload

Contains claims or information about the user and token.

Example:

```json
{
  "userId": "123",
  "email": "user@example.com"
}
```

### 3. Signature

The signature is used to verify that the token has not been modified.

---

## 🔐 JWT Authentication Flow

After a successful login:

```text
User Login
    │
    ▼
Verify Credentials
    │
    ▼
Generate JWT
    │
    ▼
Send JWT to Client
```

The client then sends the JWT when accessing protected routes.

```text
Client
   │
   │ Authorization: Bearer <token>
   ▼
Server
   │
   ▼
Verify JWT
   │
   ▼
Allow Request
```

---

## 📤 Sending JWT

JWT is commonly sent using the `Authorization` header.

```http
Authorization: Bearer <token>
```

For example:

```http
GET /profile
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

---

## ✅ Valid Token

If the token is valid:

```text
Request
   │
   ▼
Verify JWT
   │
   ▼
Valid
   │
   ▼
Access Protected Route
```

---

## ❌ Invalid Token

If the token is invalid or expired:

```text
Request
   │
   ▼
Verify JWT
   │
   ▼
Invalid
   │
   ▼
Reject Request
```

---

## 🎯 What I Learned

* JWT stands for JSON Web Token.
* JWT has three main parts: Header, Payload, and Signature.
* JWT can be generated after successful login.
* The client sends the JWT with protected requests.
* The server verifies the JWT before allowing access.
* JWTs can expire.
