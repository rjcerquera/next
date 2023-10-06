let users = [
  { id: 1, name: 'Usuario 1' },
  { id: 2, name: 'Usuario 2' },
  { id: 3, name: 'Usuario 3' },
];

const getUsers = () => users;

const getUserById = (id) => users.find((user) => user.id === id);

const createUser = (user) => {
  users.push(user);
};

const updateUser = (id, updatedUser) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser };
  }
};

const deleteUser = (id) => {
  users = users.filter((user) => user.id !== id);
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
