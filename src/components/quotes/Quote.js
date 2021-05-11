import { Card } from 'react-bootstrap'
import styled from 'styled-components'

export default function quote({_quote}) {
  const { quote, author } = _quote

  return (
    <QuoteCard>
      <Card.Body>
        <blockquote>"{ quote }"</blockquote>
        <small>{ author }</small>
      </Card.Body> 
    </QuoteCard>
  )
}
const QuoteCard = styled(Card)`
  text-align: center;
  box-shadow: 0 0 8px 1px rgba(0,0,0,0.1);

   .card-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    

    blockquote {
      font-style: italic;
      margin: 1rem;
    }

    small {
      font-weight: bold;
    }
  }
`