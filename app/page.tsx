"use client"

/* Components */
import { Counter } from "./components/Counter/Counter"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useRouter } from "next/navigation"

import styles from "./styles/layout.module.css"

export default function IndexPage() {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    router.push("/usuarios")
  }

  return (
    <div className={styles.home}>
      <Container>
        <h1>Bienvenido a nuestra página web</h1>
        <p className={styles.containerButton}>
          <Button variant="primary" onClick={handleClick}>
            Comenzar
          </Button>
        </p>
      </Container>
    </div>
  )
}
