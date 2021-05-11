import { Card } from 'react-bootstrap'
import styled from 'styled-components'

export default function Character({ character }) {
  const { 
    name, 
    nickname, 
    img, 
    status, 
    occupation, 
    appearance, 
    portrayed, 
    better_call_saul_appearance 
  } = character

  const OccupationList = () => {
    let list = occupation.map((job, i) => (<li key={ i }>{ job }</li>))
    return (
      <ul>{ list }</ul>
    )
  }
  const SeasonsList = () => {
    let list = appearance.map((season, i) => (<li key={ i }>Season: { season }</li>))
    return (
      <ul>{ list }</ul>
    )
  }
  
  return (
  <CharacterCard>
    <CharacterImg variant="top" src={ img } fluid/>
    <CardBody>
      <Card.Title>{ name }<small>Actor: { portrayed }</small></Card.Title>
      <Card.Text>{ nickname }</Card.Text>
      Occupations: 
      <OccupationList />
      Breaking Bad:
      <SeasonsList />
    </CardBody>
  </CharacterCard>
  )
}

const CharacterCard = styled(Card)`
  box-shadow: 0 0 8px 1px rgba(0,0,0,0.1);
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 8px 1px rgba(0,0,0,0.3);
  }
`
const CharacterImg = styled(Card.Img)`
  height: 25rem;
`
const CardBody = styled(Card.Body)`
 
`
