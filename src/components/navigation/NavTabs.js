import { Nav, Card } from 'react-bootstrap'

export default function NavTabs() {
  return (
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#characters">
      <Nav.Item>
        <Nav.Link href="#characters">Characters</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#episodes">Episodes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#quotes">Quotes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#deaths">Deaths</Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  )
}
