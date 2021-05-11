import { Card } from 'react-bootstrap'
import { useQuery } from 'react-query'
import Character from './Character'
import Loading from '../utilities/Loading'
import styled from 'styled-components'

const getCharacters = async () => {
   const res = await fetch(`https://www.breakingbadapi.com/api/characters`)
    return await res.json()
}

export default function Characters() {
  const { data, status } = useQuery('characters', getCharacters) 
  
  if (status === 'error') return <h1>Error :(</h1>
  if (status === 'loading') return <Loading />

  const result = data.map((character, i) => <Character key={ i } character={ character }/>)

  return (
      <Card>
        <CharacterContainer>
          { result }
        </CharacterContainer>
      </Card>
  )
}
const CharacterContainer = styled(Card.Body)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
  gap: 2rem;
`