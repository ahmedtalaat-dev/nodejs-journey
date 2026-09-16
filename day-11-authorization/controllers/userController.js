const getUsers = (req, res) => {
  res.json([
    {
      id: 1,
      name: "Ahmed",
      role: "admin",
    },
    {
      id: 2,
      name: "Ali",
      role: "student",
    },
  ]);
};

const deleteUser = (req, res) => {
  res.json({
    message: "User deleted successfully",
  });
};

module.exports = {
  getUsers,
  deleteUser,
};
