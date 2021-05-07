import { Card } from 'react-bootstrap'

export default function CharacterCard({character}) {
  const {name, nickname, img} = character
  return (
  <Card style={{width: '20rem', margin: '.8rem'}} bg='dark' text='light'>
    <Card.Img variant="top" src={img} style={{height: '25rem'}}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{nickname}</Card.Title>
      </Card.Body>
  </Card>
  )
}
