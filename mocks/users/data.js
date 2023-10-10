let users = []

for (let i = 0; i <= 20; i++) {
  users.push({
    id: i,
    name: `Usuario ${i}`,
    age: Math.floor(Math.random() * 50) + 18,
    email: `usuario${i}@example.com`,
    image: `/images/user${Math.floor(Math.random() * 2)}.png`,
    description: `Descripción del Usuario ${i}`,
  })
}

const getUsers = () => users

const getUserById = (id) => users.find((user) => user.id === id)

const createUser = (user) => {
  users.push(user)
}

const updateUser = (id, updatedUser) => {
  const index = users.findIndex((user) => user.id === id)
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser }
  }
}

const deleteUser = (id) => {
  users = users.filter((user) => user.id !== id)
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
