import { useContext } from 'react'
import { Container, Card } from 'react-bootstrap'
import NavTabs from './components/NavTabs'
import SearchForm from './components/SearchForm'
import CardArea from './components/CardArea'
import { FormContext } from './providers/FormContextProvider'

function App() {
  const { globalContext: { limit } } = useContext(FormContext)

  

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
     {state.values.data.length > 1 ? <CardArea state={state}/> : ''}
    </Container>
  );
}

export default App;
