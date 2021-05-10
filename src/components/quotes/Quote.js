import { Card } from 'react-bootstrap'
import styled from 'styled-components'

export default function quote({_quote}) {
  const { quote, author, series } = _quote
  return (
    <Card>
      <QuoteBody>
        <blockquote><i>"{ quote }"</i></blockquote>
        <small>{ author }</small>
      </QuoteBody> 
    </Card>
  )
}
const QuoteBody = styled(Card.Body)`
  text-align: center;
`