# 🔎 MongoDB Queries

Today I learned how to query and manipulate data in MongoDB.

MongoDB provides methods for working with documents.

## 📚 CRUD Operations

CRUD stands for:

| Operation | Purpose |
|-----------|---------|
| Create | Add data |
| Read | Get data |
| Update | Modify data |
| Delete | Remove data |

---

## ➕ Create

### Insert One Document

```javascript
db.students.insertOne({
  name: "Ahmed",
  age: 21
});
```

Insert Multiple Documents

```javascript
db.students.insertMany([
  {
    name: "Ahmed",
    age: 21
  },
  {
    name: "Ali",
    age: 22
  }
]);
```

## 🔍 Read

### Find All Documents

```javascript
db.students.find();
```

### Find One Document

```javascript
db.students.findOne({
  name: "Ahmed"
});
```

### Find Documents with a Condition

```javascript
db.students.find({
  age: 21
});
```

## 🔎 Query Operators
MongoDB provides operators for more advanced queries.

### Greater Than

```javascript
db.students.find({
  age: {
    $gt: 20
  }
});
```

### Less Than

```javascript
db.students.find({
  age: {
    $lt: 30
  }
});
```

### Greater Than or Equal

```javascript
db.students.find({
  age: {
    $gte: 21
  }
});
```

### Less Than or Equal

```javascript
db.students.find({
  age: {
    $lte: 25
  }
});
```

## ✏️ Update

### Update One Document

```javascript
db.students.updateOne(
  {
    name: "Ahmed"
  },
  {
    $set: {
      age: 22
    }
  }
);
```

### Update Multiple Documents

```javascript
db.students.updateMany(
  {
    age: 21
  },
  {
    $set: {
      status: "student"
    }
  }
);
```

## 🗑️ Delete

### Delete One Document

```javascript
db.students.deleteOne({
  name: "Ahmed"
});
```

### Delete Multiple Documents

```javascript
db.students.deleteMany({
  age: 21
});
```

## ✅ Key Takeaways
- insertOne() creates one document.
- insertMany() creates multiple documents.
- find() gets documents.
- findOne() gets one document.
- updateOne() updates one document.
- updateMany() updates multiple documents.
- deleteOne() deletes one document.
- deleteMany() deletes multiple documents.
- Query operators allow us to create more specific queries.
