import React, { useContext } from 'react'
import { Accordion } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { FormContext } from '../../providers/FormContextProvider'
import Episode from './Episode'
import Loading from '../utilities/Loading'

const getEpisodes = async ({queryKey}) => {
  const [_key, limit] = queryKey
   const res = await fetch(`https://www.breakingbadapi.com/api/episodes?limit=${limit}`)
    return await res.json()
}

export default function Episodes() {
  const { globalState: { limit } } = useContext(FormContext)
  
  const { data, status } = useQuery(['episodes', limit], getEpisodes) 
  
  if (status === 'error') return <h1>Error :(</h1>
  if (status === 'loading') return <Loading />

  const result = data.map((_episode, i) => <Episode key={ i } _episode={_episode}/>)

  return (
      <Accordion>
          { result }
      </Accordion>
  )
}
