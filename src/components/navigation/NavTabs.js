import { Nav, Card } from 'react-bootstrap'
import { useContext } from 'react'
import { FormContext } from '../../providers/FormContextProvider'


export default function NavTabs() {
  const { globalState: { page, setPage } } = useContext(FormContext)
  
  return (
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
  )
  
}
