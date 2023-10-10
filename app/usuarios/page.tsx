"use client"

import { useEffect } from "react"
import { Table } from "react-bootstrap"
import Figure from "react-bootstrap/Figure"

import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa"

/* Instruments */
import { useSelector, useDispatch, selectUser, getUsers } from "@/lib/redux"

import styles from "./styles.module.scss"

export default function Usuarios() {
  const dispatch = useDispatch()
  const users = useSelector(selectUser)

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <div className="container">
      <h1>LISTADO DE USUARIOS</h1>
      <Table striped bordered hover className={styles["table-user"]}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Avatar</th>
            <th>Edad</th>
            <th>Correo</th>
            <th>Descripción</th>
            <th></th>
            <th></th>
            <th></th>
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
              <td className={styles["cell-button"]}>
                <FaEye className={styles["color-green"]} />
              </td>
              <td className={styles["cell-button"]}>
                <FaPencilAlt className={styles["color-yellow"]} />
              </td>
              <td className={styles["cell-button"]}>
                <FaTrash className={styles["color-red"]} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
