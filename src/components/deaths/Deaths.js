import { Card } from 'react-bootstrap'
import { useQuery } from 'react-query'
import Loading from '../utilities/Loading'
import Death from './Death'
import styled from 'styled-components'

const getDeaths = async () => {
   const res = await fetch(`https://www.breakingbadapi.com/api/deaths`)
    return await res.json()
}

export default function Deaths() {
  const { data, status } = useQuery('deaths', getDeaths) 
  
  if (status === 'error') return <h1>Error :(</h1>
  if (status === 'loading') return <Loading />

  const result = data.map((death, i) => <Death key={ i } _death={ death }/>)

  return (
      <DeathsArea>
        <Card.Body>
          { result }
        </Card.Body>
      </DeathsArea>
  )
}
const DeathsArea = styled(Card)`
  & > .card-body {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-auto-rows: minmax(10rem, auto);
    gap: 1.5rem;
  }
`