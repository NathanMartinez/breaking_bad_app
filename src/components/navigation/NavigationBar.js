import { Button, Nav, Navbar } from 'react-bootstrap'

export default function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed='top' bg="light" variant="light">
      <Navbar.Brand href="/">Breaking Bad App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Characters</Nav.Link>
          <Nav.Link href="/episodes">Episodes</Nav.Link>
          <Nav.Link href="/quotes">Quotes</Nav.Link>
          <Nav.Link href="/deaths">Deaths</Nav.Link>
        </Nav>
        <Button variant="dark">Dark Mode</Button>
      </Navbar.Collapse>
    </Navbar>
  )
}