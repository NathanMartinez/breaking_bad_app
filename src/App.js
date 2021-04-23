import { Container, Card } from 'react-bootstrap'
import NavTabs from './components/NavTabs'
import SearchForm from './components/SearchForm'

function App() {


  return (
    <Container className="App">
      <Card>
        <Card.Header>
          <NavTabs />
        </Card.Header>
        <Card.Body>
          <SearchForm />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
