const express = require("express");

const {
  getUsers,
  deleteUser,
} = require("../controllers/userController");

const authorize = require("../middleware/authorize");

const router = express.Router();

router.get(
  "/",
  authorize(["admin", "teacher"]),
  getUsers
);

router.delete(
  "/:id",
  authorize(["admin"]),
  deleteUser
);

module.exports = router;
