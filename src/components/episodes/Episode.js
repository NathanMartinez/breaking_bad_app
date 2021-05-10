import { Accordion, Button, Card } from 'react-bootstrap'
import styled from 'styled-components'

export default function Episode({ _episode }) {
  const { episode_id, title, episode, characters, season, air_date } = _episode

  const characterList = characters.map(((character, i) => (
  <Card key={i} style={{width: '10rem'}}>
    <Card.Body>
      { character }
    </Card.Body>
  </Card>
  
  )
  
  ))

  return (
    <Card>
    <Header>
      <Accordion.Toggle as={ Button } variant="link" eventKey={ episode_id }>
        { title }
      </Accordion.Toggle>
      <br/>
      <small><b>Season: { season } | Episode: { episode }</b></small>
    </Header>
    <Accordion.Collapse eventKey={ episode_id }>
      <Card.Body> 
      Characters: 
      <CharacterArea>
      { characterList }
      </CharacterArea>
        {/* <small>Air Date: { air_date }</small> */}
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  )
}

const Header = styled(Card.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const CharacterArea = styled(Card.Body)`
display: grid;
grid-template-columns: repeat(auto, 10rem);
`