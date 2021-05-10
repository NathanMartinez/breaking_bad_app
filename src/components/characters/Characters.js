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
  const { data, status } = useQuery('random_characters', getCharacters) 
  
  if (status === 'error') return <h1>Error :(</h1>
  if (status === 'loading') return <Loading />

  const result = data.map((character, i) => <Character key={i} character={character}/>)

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
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, auto);
  }

  gap: 2rem;
  justify-content: center;
`