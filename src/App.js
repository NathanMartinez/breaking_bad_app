// React
import { useContext } from 'react'

// React Bootstrap
import { Card } from 'react-bootstrap'

// Components
import NavTabs from './components/navigation/NavTabs'
import Characters from './components/characters/Characters'
import Episodes from './components/episodes/Episodes'

// Context
import { FormContext } from './providers/FormContextProvider'
import Quotes from './components/quotes/Quotes'
import Deaths from './components/deaths/Deaths'

function App() {
  const { globalState: { page } } = useContext(FormContext)

  return (
      <> 
            <NavTabs />
          { page === 'episodes' && <Episodes /> }
          { page === 'characters' && <Characters /> }
          { page === 'quotes' && <Quotes /> }
          { page === 'deaths' && <Deaths /> }
      </>
  );
}

export default App;
