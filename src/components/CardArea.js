import { Card, CardDeck } from 'react-bootstrap'
import CharacterCard from './CharacterCard'

export default function CardArea({data}) {
  if (!data.char_id) return <></>
  let result = data.map(character => <CharacterCard character={character} key={character.char_id}/>)
  return (
    <Card>
      <Card.Body>
        <CardDeck>{result}</CardDeck>
      </Card.Body>
    </Card>
  )
}
