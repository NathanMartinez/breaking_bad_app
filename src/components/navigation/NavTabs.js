import { Nav, Card } from 'react-bootstrap'
import { useContext } from 'react'
import { FormContext } from '../../providers/FormContextProvider'
import styled from 'styled-components'


export default function NavTabs() {
  const { globalState: { page, setPage } } = useContext(FormContext)
  
  return (
  <NavContainer>
    <Card.Header>
    <Nav variant="tabs" defaultActiveKey={page} justify>
      <Nav.Item>
        <Nav.Link eventKey="characters" onSelect={() => setPage("characters")}>Characters</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="episodes" onSelect={() => setPage("episodes")}>Episodes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="quotes" onSelect={() => setPage("quotes")}>Quotes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="deaths" onSelect={() => setPage("deaths")}>Deaths</Nav.Link>
      </Nav.Item>
    </Nav>
    </Card.Header>
    <Card.Body>
      <Card.Title>Breaking Bad</Card.Title>
    </Card.Body>
  </NavContainer>
  )
}
const NavContainer = styled(Card)`
  &, div {
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    background: white;
  }
`