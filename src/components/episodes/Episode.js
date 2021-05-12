import { Badge, Card } from 'react-bootstrap'
import { useThemeContext } from '../../context/ThemeContext'
import styled from 'styled-components'

export default function Episode({ _episode }) {
  const { darkTheme } = useThemeContext()
  
  const { title, episode, characters, season, air_date } = _episode

  const characterList = characters.map(((character, i) => (
    <Badge pill variant={ darkTheme ? 'success' : 'dark' } key={ i }>
      { character }
    </Badge>
  )))

  return (
  <Card bg={ darkTheme ? 'dark' : 'light' } text={ darkTheme ? 'light' : 'dark' }>
    <Header>
        { title }
      <small>Season: { season } | Episode: { episode }</small>
    </Header>
      <Card.Body> 
        Characters
          <CharacterCardArea>
            { characterList }
          </CharacterCardArea>
        <small>Air Date: { air_date }</small>
      </Card.Body>
  </Card>
  )
}

const Header = styled(Card.Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;

    small {
      display: block;
    }
`
const CharacterCardArea = styled.div`
  margin: 1rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  gap: .5rem;
    .badge {
    box-shadow: 0 0 8px 1px rgba(0,0,0,0.1);
  }
`