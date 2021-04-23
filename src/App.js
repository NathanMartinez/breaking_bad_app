import { useState } from 'react'
import { Container, Card } from 'react-bootstrap'
import NavTabs from './components/NavTabs'
import SearchForm from './components/SearchForm'
import CardArea from './components/CardArea'

function App() {
  let [data, setData] = useState({})

  return (
    <Container className="App">
      <Card>
        <Card.Header>
          <NavTabs />
        </Card.Header>
        <Card.Body>
          <SearchForm setData={setData}/>
        </Card.Body>
      </Card>
      <CardArea data={data}/>
    </Container>
  );
}

export default App;
