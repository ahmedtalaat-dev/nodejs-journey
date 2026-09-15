# Lesson 3 — Authentication Flow with JWT

## 📌 Complete Authentication Flow

Today I connected everything I learned about registration, login, and JWT into one complete authentication flow.

---

## 1. Register

The user creates an account.

```http
POST /register
```

```text
Email + Password
       │
       ▼
   Validate
       │
       ▼
 Hash Password
       │
       ▼
 Create User
```

---

## 2. Login

The user logs in with their credentials.

```http
POST /login
```

```text
Email + Password
       │
       ▼
 Find User
       │
       ▼
 Verify Password
       │
       ▼
 Credentials Correct
```

---

## 3. Generate JWT

After successful authentication, the server creates a JWT.

```text
Successful Login
       │
       ▼
Generate JWT
       │
       ▼
Return Token
```

---

## 4. Client Sends JWT

The client uses the JWT when making requests to protected routes.

```http
Authorization: Bearer <JWT>
```

Example:

```http
GET /profile
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

---

## 5. Verify JWT

The server receives the request and verifies the token.

```text
Request
   │
   ▼
Extract JWT
   │
   ▼
Verify JWT
   │
   ├── Valid ──────► Continue
   │
   └── Invalid ────► Unauthorized
```

---

## 6. Protected Routes

A protected route can only be accessed by an authenticated user.

For example:

```http
GET /profile
```

Without a valid token:

```text
401 Unauthorized
```

With a valid token:

```text
200 OK
```

---

## 🔄 Complete Flow

```text
                 REGISTER
                    │
                    ▼
               Create User
                    │
                    ▼
                  LOGIN
                    │
                    ▼
            Verify Credentials
                    │
                    ▼
              Generate JWT
                    │
                    ▼
              Send JWT
                    │
                    ▼
            Client Stores Token
                    │
                    ▼
        Request Protected Route
                    │
                    ▼
             Send JWT
                    │
                    ▼
             Verify JWT
                    │
             ┌──────┴──────┐
             ▼             ▼
           Valid         Invalid
             │             │
             ▼             ▼
       Access Route    Unauthorized
```

---

## 🔑 Important Concepts

### Authentication

Determines who the user is.

### Authorization

Determines what the user can access.

### JWT

A token that can be used to authenticate requests.

### Protected Route

A route that requires authentication.

---

## 🎯 What I Learned

* How registration works.
* How login works.
* How JWT is generated.
* How JWT is sent with requests.
* How JWT is verified.
* How protected routes work.
* The difference between authentication and authorization.
* How all these concepts work together.
