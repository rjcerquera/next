"use client"

import { Table } from "react-bootstrap"
import Figure from "react-bootstrap/Figure"

/* Instruments */
import { useSelector, useDispatch, selectUser, getUsers } from "@/lib/redux"
import { useEffect } from "react"

export default function Usuarios() {
  const dispatch = useDispatch()
  const users = useSelector(selectUser)

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <div className="container">
      <h1>LISTADO DE USUARIOS</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Avatar</th>
            <th>Edad</th>
            <th>Correo</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <Figure>
                  <Figure.Image width={50} alt="171x180" src="/images/user.png" />
                </Figure>
              </td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
