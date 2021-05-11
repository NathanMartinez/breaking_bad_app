import { Badge, Card } from 'react-bootstrap'
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
  } = character

  const OccupationList = () => {
    let list = occupation.map((job, i) => (<Occupation bg='success' text='light' key={ i }>{ job }</Occupation>))
    return (
      <Occupations>{ list }</Occupations>
    )
  }
  const SeasonsList = () => {
    let list = appearance.map((season, i) => (<Badge variant='success' key={ i }>Season: { season }</Badge>))
    return (
      <Seasons>{ list }</Seasons>
    )
  }
  
  return (
  <CharacterCard>
    <CharacterImg variant="top" src={ img } fluid/>
      <Card.Header>
      <Card.Title>{ name }</Card.Title>
      <Card.Text>{ nickname }</Card.Text>
      <small>- { portrayed }</small>
      </Card.Header>
      <CardBody className='cardbody'>
      <b>Occupations</b>
      <OccupationList />
      <b>Breaking Bad</b>
      <SeasonsList />
    </CardBody>
  </CharacterCard>
  )
}

const CharacterCard = styled(Card)`
  position: relative;
  box-shadow: 0 0 8px 1px rgba(0,0,0,0.1);
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 8px 1px rgba(0,0,0,0.3);
    .cardbody {
      display: block;
      position: absolute;
      background: rgb(247,247,247);
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
      border-radius: inherit;
      &, div {
        opacity: 0.9;
      }
    }
  }
`
const CharacterImg = styled(Card.Img)`
  height: 25rem;
`
const CardBody = styled(Card.Body)`
  display: none;
  text-align: center;
`
const Occupations = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  grid-auto-rows: minmax(3rem, auto);
  gap: .5rem;
`
const Occupation = styled(Card)`
  padding: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 0 8px 1px rgba(0,0,0,0.1);
`
const Seasons = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(2rem, 1fr));
  gap: .5rem;
  .badge {
    box-shadow: 0 0 8px 1px rgba(0,0,0,0.1);
  }
`