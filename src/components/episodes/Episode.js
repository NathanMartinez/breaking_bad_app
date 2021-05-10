import { Accordion, Button, Card } from 'react-bootstrap'
import styled from 'styled-components'

export default function Episode({ _episode }) {
  const { episode_id, title, episode, characters, season, air_date } = _episode

  const characterList = characters.map(((character, i) => <ListItem key={i}>{ character }</ListItem>))

  return (
    <Card>
    <Card.Header>
      <Accordion.Toggle as={ Button } variant="link" eventKey={ episode_id }>
        { title }
      </Accordion.Toggle>
      <AirDate>Air Date: { air_date }</AirDate>
      <SeasonInfo>Season: { season } | Episode: { episode }</SeasonInfo>
    </Card.Header>
    <Accordion.Collapse eventKey={ episode_id }>
      <Card.Body><b>Characters:</b> { characterList }</Card.Body>
    </Accordion.Collapse>
  </Card>
  )
}
const ListItem = styled.li`
  margin-left: 1rem;
`
const AirDate = styled.small`
  margin-left: 3rem;
`
const SeasonInfo = styled.small`
  margin-left: 3rem;
  font-weight: bold;
`