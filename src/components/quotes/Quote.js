import { Card } from 'react-bootstrap'
import styled from 'styled-components'

export default function quote({_quote}) {
  const { quote, author } = _quote
  return (
    <Card>
      <QuoteBody>
        <blockquote><b><i>"{ quote }"</i></b></blockquote>
        <small>{ author }</small>
      </QuoteBody> 
    </Card>
  )
}
const QuoteBody = styled(Card.Body)`
  text-align: center;
`