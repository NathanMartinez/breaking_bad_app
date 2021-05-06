import { Container, Card } from 'react-bootstrap'
import NavTabs from './components/NavTabs'
import SearchForm from './components/SearchForm'
import FormContextProvider from './providers/FormContextProvider'

function App() {
  return (
    <Container className="App">
      <FormContextProvider>
        <Card>
          <NavTabs />
          <SearchForm />
        </Card>
      </FormContextProvider>
    </Container>
  );
}

export default App;
