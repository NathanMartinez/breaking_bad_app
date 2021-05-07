import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { FormContext } from '../../providers/FormContextProvider'
import Character from './Character'

const getCharacters = async ({queryKey}) => {
  const [_key, limit] = queryKey
   const res = await fetch(`https://www.breakingbadapi.com/api/character/random?limit=${limit}`)
    return await res.json()
}

export default function Characters() {
  const { globalState: { limit } } = useContext(FormContext)
  
  const { data, status } = useQuery(['random_characters', limit], getCharacters) 
  
  if (status === 'error') return <h1>Error :(</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  const result = data.map((character, i) => <Character key={i} character={character}/>)

  return (
      <Card style={{marginTop: '1rem'}}>
        <Card.Body style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: 0}}>
          { result }
        </Card.Body>
      </Card>
  )
}
