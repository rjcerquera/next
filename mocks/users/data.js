let users = [
  {
    id: 1,
    name: "Juan Pérez",
    age: 30,
    email: "juan@example.com",
    image: "/images/user1.png",
    description: "Soy un entusiasta de la tecnología y me encanta programar.",
  },
  {
    id: 2,
    name: "María López",
    age: 28,
    email: "maria@example.com",
    image: "/images/user2.png",
    description: "Amante de los viajes y la fotografía. Siempre en busca de aventuras.",
  },
  {
    id: 3,
    name: "Pedro Rodríguez",
    age: 35,
    email: "pedro@example.com",
    image: "/images/user1.png",
    description: "Apasionado por la música y el cine. Soy cinéfilo y melómano.",
  },
]

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
