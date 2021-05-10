import { Card } from 'react-bootstrap'
import styled from 'styled-components'

export default function quote({_quote}) {
  const { quote, author } = _quote
  return (
    <QuoteCard>
      <CardBody>
        <blockquote><i>"{ quote }"</i></blockquote>
        <small><b>{ author }</b></small>
      </CardBody> 
    </QuoteCard>
  )
}
const QuoteCard = styled(Card)`
  text-align: center;
  box-shadow: 0 0 8px 1px rgba(0,0,0,0.1);
`
const CardBody = styled(Card.Body) `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`