import { Accordion, Button, Card } from 'react-bootstrap'
import styled from 'styled-components'

export default function Episode({ _episode }) {
  const { episode_id, title, episode, characters, season, air_date } = _episode

  const characterList = characters.map(((character, i) => (
  <Card bg='success' text='white' key={ i }>
    <Card.Body>
      { character }
    </Card.Body>
  </Card>
  )))

  return (
  <Card>
    <Header>
      <Accordion.Toggle as={ Button } variant="link" eventKey={ episode_id }>
        { title }
      </Accordion.Toggle>
      <small>Season: { season } | Episode: { episode }</small>
    </Header>
    <Accordion.Collapse eventKey={ episode_id }>
      <Card.Body> 
        Characters
          <CharacterCardArea>
            { characterList }
          </CharacterCardArea>
        <small>Air Date: { air_date }</small>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  )
}

const Header = styled(Card.Header)`
  display: flex;
  align-items: center;

  small {
    display: block;
    font-weight: bold;
  }
`
const CharacterCardArea = styled(Card.Body)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-auto-rows: minmax(3rem, auto);
    gap: .5rem;

    .card {
      box-shadow: 0 0 8px 1px rgba(0,0,0,0.1);
      text-align: center;
      
    .card-body {
      font-style: italic;
      font-weight: bold;
    }
    }
`