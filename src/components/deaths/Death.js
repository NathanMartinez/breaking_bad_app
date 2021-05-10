import { Card } from 'react-bootstrap'
import styled from 'styled-components'

export default function Death({_death}) {
  const { death, cause, responsible, last_words, season, episode } = _death
  return (
    <Card>
      <Header>
        <b>{ death }</b> 
        <small><b>Season: { season } | Episode: { episode }</b></small>
      </Header>
      <Card.Body>
        <p><b>Cause of Death:</b> { cause }</p>
        <b>Last Words: </b>
        <blockquote><i>{ last_words }</i></blockquote>
        <p><b>Killed By:</b> { responsible }</p>
      </Card.Body> 
    </Card>
  )
}
const Header = styled(Card.Header)`
  display: flex;
  justify-content: space-between;
`