import { Card } from 'react-bootstrap'
import { useQuery } from 'react-query'
import Loading from '../utilities/Loading'
import Quote from './Quote'
import styled from 'styled-components'

const getQuotes = async () => {
   const res = await fetch(`https://www.breakingbadapi.com/api/quotes`)
    return await res.json()
}

export default function Quotes() {
  const { data, status } = useQuery('quotes', getQuotes) 
  
  if (status === 'error') return <h1>Error :(</h1>
  if (status === 'loading') return <Loading />

  const result = data.map((_quote, i) => <Quote key={i} _quote={_quote}/>)

  return (
      <Card>
        <QuoteSection>
          { result }
        </QuoteSection>
      </Card>
  )
}
const QuoteSection = styled(Card.Body)`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-auto-rows: minmax(3rem, auto);
gap: 1.5rem;
`