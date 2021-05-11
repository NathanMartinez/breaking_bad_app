import { Accordion } from 'react-bootstrap'
import { useQuery } from 'react-query'

import Episode from './Episode'
import Loading from '../utilities/Loading'

const getEpisodes = async () => {
   const res = await fetch(`https://www.breakingbadapi.com/api/episodes`)
    return await res.json()
}

export default function Episodes() {
  const { data, status } = useQuery('episodes', getEpisodes) 
  
  if (status === 'error') return <h1>Error :(</h1>
  if (status === 'loading') return <Loading />

  const result = data.map((episode, i) => <Episode key={ i } _episode={ episode }/>)

  return (
      <Accordion>
          { result }
      </Accordion>
  )
}
