import React from "react"
import { Container, Row, Col } from "react-bootstrap"

export default function Footer() {
  return (
    <footer className="bg-dark text-light">
      <Container fluid>
        <Row>
          <Col className="text-center py-3">
            <p>&copy; 2023 Junior Cerquera. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
