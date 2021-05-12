import { Card } from 'react-bootstrap'

import { useQuery } from 'react-query'

import { useThemeContext } from '../../context/ThemeContext'

import Character from './Character'
import Loading from '../utilities/Loading'

import styled from 'styled-components'

const getCharacters = async () => {
   const res = await fetch(`https://www.breakingbadapi.com/api/characters`)
    return await res.json()
}

export default function Characters() {
  const { useTheme } = useThemeContext()
  const { bg, text } = useTheme()

  const { data, status } = useQuery('characters', getCharacters) 
  
  if (status === 'error') return <h1>Error :(</h1>
  if (status === 'loading') return <Loading />

  const result = data.map((character, i) => <Character key={ i } character={ character }/>)

  return (
      <CharacterContainer bg={ bg } text={ text }>
        <Card.Body>
          { result }
        </Card.Body>
      </CharacterContainer>
  )
}
const CharacterContainer = styled(Card)`
  .card-body {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
    gap: 2rem; 
    padding: 2rem 1rem;
  }
`