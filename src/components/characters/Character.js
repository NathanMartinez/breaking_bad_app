import { Card } from 'react-bootstrap'
import styled from 'styled-components'

export default function Character({character}) {
  const {name, nickname, img, status} = character

  return (
  <CharacterCard>
    <CharacterImg variant="top" src={img} fluid/>
    <Card.ImgOverlay className='text-white'>
      <Card.Text>{ status }</Card.Text>
    </Card.ImgOverlay>
    <CardBody>
      <Card.Title>{ name }</Card.Title>
      <Card.Text>{ nickname }</Card.Text>
    </CardBody>
  </CharacterCard>
  )
}

const CharacterCard = styled(Card)`
width: 20rem;
&:hover {
  cursor: pointer;
  box-shadow: 0 0 10px 1px gray;
}
`
const CharacterImg = styled(Card.Img)`
height: 25rem;
`
const CardBody = styled(Card.Body)`
text-align: center;
`