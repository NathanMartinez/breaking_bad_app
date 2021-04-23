import { Card, Button } from 'react-bootstrap'
import OccupationList from './OccupationList'

export default function CharacterCard({character}) {
  let {img, name, birthday, status, nickname, occupation} = character
  return (
  <Card style={{ width: '18rem' }} bg='dark' text='light'>
    <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{nickname}</Card.Title>
            <OccupationList occupations={occupation} />
    </Card.Body>
  </Card>
  )
}
