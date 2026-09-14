# 🗄️ SQL vs NoSQL

Today I learned the difference between **SQL** and **NoSQL** databases.

## 🧩 What is SQL?

SQL databases are relational databases.

They organize data into:

- Tables
- Rows
- Columns

Examples:

- MySQL
- PostgreSQL
- SQL Server
- Oracle

Example table:

| id | name | age |
|----|------|-----|
| 1 | Ahmed | 21 |
| 2 | Ali | 22 |
| 3 | Omar | 25 |

## 📦 What is NoSQL?

NoSQL databases are non-relational databases.

They can store data in different structures, such as:

- Documents
- Key-value pairs
- Graphs
- Wide-column data

MongoDB is a popular document-based NoSQL database.

## ⚖️ SQL vs NoSQL

| Feature | SQL | NoSQL |
|---------|-----|-------|
| Structure | Tables | Documents / other structures |
| Schema | Usually predefined | More flexible |
| Data | Rows and columns | Documents |
| Relationships | Strong support | Different approach |
| Scaling | Often vertical | Often designed for horizontal scaling |
| Example | MySQL | MongoDB |

## 🧠 SQL Example

```sql
SELECT * FROM students;
```
SQL queries work with tables and rows.

## 🍃 MongoDB Example

```mongo
db.students.find();
```
MongoDB queries work with collections and documents.

## ✅ Key Takeaways
- SQL databases are relational.
- NoSQL databases are non-relational.
- SQL commonly uses tables and rows.
- MongoDB uses collections and documents.
- NoSQL databases generally provide more flexible data models.
