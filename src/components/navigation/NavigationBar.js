import { Button, Nav, Navbar } from 'react-bootstrap'
import { useThemeContext } from '../../context/ThemeContext'

export default function NavigationBar() {
  const { darkTheme, setDarkTheme, useTheme } = useThemeContext()
  const { variant } = useTheme()

  const changeTheme = (e) => {
    e.preventDefault()
    setDarkTheme(prev => !prev)
  }

  return (
    <Navbar collapseOnSelect expand="lg" fixed='top' bg={ darkTheme ? 'dark' : 'light' } variant={ darkTheme ? 'dark' : 'light' }>
      <Navbar.Brand href="/">Breaking Bad App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Characters</Nav.Link>
          <Nav.Link href="/episodes">Episodes</Nav.Link>
          <Nav.Link href="/quotes">Quotes</Nav.Link>
          <Nav.Link href="/deaths">Deaths</Nav.Link>
        </Nav>
        <Button variant={ variant } onClick={ changeTheme }>Dark Mode</Button>
      </Navbar.Collapse>
    </Navbar>
  )
}