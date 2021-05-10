// React
import { useContext } from 'react'

// React Bootstrap
import { Card } from 'react-bootstrap'

// Components
import NavTabs from './components/navigation/NavTabs'
import SearchForm from './components/form-components/SearchForm'
import Characters from './components/characters/Characters'
import Episodes from './components/episodes/Episodes'

// Context
import { FormContext } from './providers/FormContextProvider'

function App() {
  const { globalState: { page } } = useContext(FormContext)

  return (
      <> 
          <Card>
            <NavTabs />
            <SearchForm />
          </Card>
          { page === 'episodes' && <Episodes /> }
        { page === 'characters' && <Characters /> }
      </>
  );
}

export default App;
