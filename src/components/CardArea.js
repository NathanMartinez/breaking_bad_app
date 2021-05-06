import { Card, Container } from 'react-bootstrap'

export default function CardArea({ children }) {
  return (
    <Card>
      <Card.Body>
        <Container>
          { children }
        </Container>
      </Card.Body>
    </Card>
  )
}
