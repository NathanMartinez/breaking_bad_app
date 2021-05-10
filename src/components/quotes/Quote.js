import { Card } from 'react-bootstrap'
import styled from 'styled-components'

export default function quote({_quote}) {
  const { quote, author } = _quote
  return (
    <QuoteCard>
      <Card.Header>
        { author }
      </Card.Header>
      <Card.Body>
        <blockquote><b><i>"{ quote }"</i></b></blockquote>
        {/* <small>{ author }</small> */}
      </Card.Body> 
    </QuoteCard>
  )
}
const QuoteCard = styled(Card)`
  text-align: center;
  box-shadow: 0 0 8px 1px rgba(0,0,0,0.1);
`