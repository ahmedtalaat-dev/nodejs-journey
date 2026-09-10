# 🚀 Day 06 — Express Advanced Topics

Today I learned advanced topics in **Express.js**, focusing mainly on middleware, cookies, security, templating engines, and application settings.

## 📚 Topics Covered

- Express Middleware
- Route Handler Middleware
- Built-in Middleware
- Custom Middleware
- Third-party Middleware
- Cookies
- HTTPOnly Cookies
- `cookie-parser`
- `helmet`
- Parameter Middleware
- Templating Engines
- EJS
- Express Application Settings

## 📂 Project Structure

```text
day-06-express-advanced-topics/
├── README.md
├── middleware.md/
├── cookies-and-security.md/
└── templating-and-settings.md/
```

## 🧠 What I Learned

### Middleware
Middleware functions are functions that have access to:

```bash
req
res
next
```
They can execute code, modify the request or response, end the request-response cycle, or pass control to the next middleware.

### Cookies
Cookies allow the server to store small pieces of information in the user's browser.

I also learned about:

- Creating cookies
- Encoding cookies
- HTTPOnly cookies
- Using cookie-parser

### Security
I learned how third-party middleware such as helmet can help improve the security of an Express application by setting HTTP response headers.

### Templating
I learned what templating engines are and how to use EJS with Express to generate dynamic HTML pages.

### Application Settings
Express provides application settings that can be configured using:

```bash
app.set()
```

and accessed using:
```bash
app.get()
```
