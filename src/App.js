// React
import { useContext } from 'react'

// React Bootstrap
import { Container, Card } from 'react-bootstrap'

// Components
import NavTabs from './components/navigation/NavTabs'
import SearchForm from './components/form-components/SearchForm'
import Characters from './components/characters/Characters'

// Context
import { FormContext } from './providers/FormContextProvider'

function App() {
  const { globalState: { page } } = useContext(FormContext)

  return (
      <Container className="app" style={{background: '#353A40', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Card>
            <NavTabs />
            <SearchForm />
          </Card>
        { page === 'characters' && <Characters /> }
      </Container>
  );
}

export default App;
