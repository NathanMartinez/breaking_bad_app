import { Card } from 'react-bootstrap'
import styled from 'styled-components'

export default function Death({_death}) {
  const { death, cause, responsible, last_words, season, episode } = _death
  return (
    <DeathCard>
      <Card.Header>
        { death }
        <small>Season: { season } | Episode: { episode }</small>
      </Card.Header>
      <Card.Body>
        <p><b>Cause of Death: </b>{ cause }</p>
        <b>Last Words:</b>
        <blockquote>"{ last_words }"</blockquote>
        <p><b>Killed By: </b>{ responsible }</p>
      </Card.Body> 
    </DeathCard>
  )
}
const DeathCard = styled(Card)`
  box-shadow: 0 0 8px 1px rgba(0,0,0,0.1);

  blockquote {
    font-style: italic;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
  }
  
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`