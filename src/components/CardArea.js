import { Card, Container } from 'react-bootstrap'
import CharacterCard from './CharacterCard'

export default function CardArea({data}) {
  let result
  if (data) {
    result = data.map(character => <CharacterCard character={character} key={character.char_id}/>)
  }
  let singleCardStyle = { 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  }
  return (
    <Card>
      <Card.Body>
        <Container style={singleCardStyle}>
            {result}
        </Container>
      </Card.Body>
    </Card>
  )
}
