# 🍃 MongoDB Basics

MongoDB is a **NoSQL document database**.

Instead of storing data in tables and rows, MongoDB stores data as **documents** inside **collections**.

## 📚 MongoDB Structure

The basic structure is:

```text
Database
   ↓
Collection
   ↓
Document
   ↓
Fields
```

### 🗄️ Database
A database contains collections.

Example:

```text
school
```

### 📁 Collection
A collection contains related documents.

For example:

```text
students
```
A collection is similar to a table in SQL.

### 📄 Document
A MongoDB document is similar to a row in SQL, but it uses a flexible document structure.

Example:

```mongo
{
  name: "Ahmed",
  age: 21,
  city: "Minya"
}
```
🧩 Documents Can Have Different Fields

MongoDB allows documents in the same collection to have different structures.

Example:

```mongo
{
  name: "Ahmed",
  age: 21
}
```

Another document:

```mongo
{
  name: "Ali",
  age: 22,
  city: "Cairo"
}
```
This flexibility is one of the characteristics of document-oriented databases.

## 🆔 MongoDB _id
MongoDB documents normally have an _id field that uniquely identifies the document.

Example:

```mongo
{
  _id: ObjectId("..."),
  name: "Ahmed",
  age: 21
}
```

## ✅ Key Takeaways
- MongoDB is a NoSQL database.
- MongoDB stores documents.
- Documents are stored inside collections.
- Collections are stored inside databases.
- MongoDB documents use a flexible structure.
- Every document normally has a unique _id.
