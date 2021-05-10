import { Accordion, Button, Card } from 'react-bootstrap'
import styled from 'styled-components'

export default function Episode({ _episode }) {
  const { episode_id, title, episode, characters, season, air_date } = _episode

  const characterList = characters.map(((character, i) => <ListItem key={i}>{ character }</ListItem>))

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
      <Body> 
        Characters: 
        { characterList }
        <small>Air Date: { air_date }</small>
      </Body>
    </Accordion.Collapse>
  </Card>
  )
}
const ListItem = styled.li`
  margin-left: 1rem;
  list-style-type: "- ";
`
const Header = styled(Card.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Body = styled(Card.Body)`
small {
  display: block;
  margin: 1.5rem 0 0 1rem;
}
`