import { useState } from 'react'
import { Container, Card } from 'react-bootstrap'
import NavTabs from './components/NavTabs'
import SearchForm from './components/SearchForm'
import CardArea from './components/CardArea'

function App() {
  const [searchText, setSearchText] = useState('')
  const [limit, setLimit] = useState(1)
  const [searchOptions, setSearchOptions] = useState('random')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const state = {
    values: {
    searchText,
    limit, 
    data, 
    loading,
    searchOptions
    },
    setValues: {
      setSearchText,
      setLimit,
      setData,
      setLoading,
      setSearchOptions
    }
  }

  return (
    <Container className="App">
      <Card>
        <Card.Header>
          <NavTabs />
        </Card.Header>
        <Card.Body>
          <SearchForm state={state}/>
        </Card.Body>
      </Card>
     {state.values.data.length > 1 ? <CardArea state={state}/> : ''}
    </Container>
  );
}

export default App;
