const express = require("express");
const Ajv = require("ajv");
const ajv = new Ajv();
const app = express();
app.use(express.json());

const schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      pattern: "^[A-Z]",
      maxLength: 10,
    },
    age: {
      type: "integer",
    },
  },
  required: ["name", "age"],
  additionalProperties: false,
};

const validate = ajv.compile(schema);

const students = [
  {
    id: 1,
    name: "Ahmed",
    age: 21,
  },
  {
    id: 2,
    name: "Ali",
    age: 21,
  },
  {
    id: 3,
    name: "Omar",
    age: 33,
  },
  {
    id: 4,
    name: "Mona",
    age: 31,
  },
];

app.get("/", (req, res) => {
  res.send("Hello Ahmed");
});

app.get("/api/students", (req, res) => {
  res.json(students);
});

app.get("/api/students/:studentId", (req, res) => {
  const id = req.params.studentId;
  const student = students.filter((s) => {
    return s.id == id;
  });
  res.json(student);
});

app.post("/api/students", (req, res) => {
  const data = req.body;
  const valid = validate(data);
  if (!valid) {
    res.send("Data is not valid");
  } else {
    const newStudent = { ...data, id: `${students.length + 1}` };
    students.push(newStudent);
    res.json(students);
  }
});

app.delete("/api/students/:studentId", (req, res) => {
  const id = Number(req.params.studentId);
  const newStudents = students.filter((s) => {
    return s.id !== id;
  });
  res.json(newStudents);
});

app.put("/api/students/:studentId", (req, res) => {
  const id = Number(req.params.studentId);
  const data = req.body;

  const index = students.findIndex((s) => {
    return s.id === id;
  });

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students[index] = {
    id: id,
    ...data,
  };

  res.json(students);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
