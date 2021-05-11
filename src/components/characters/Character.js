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
    let list = occupation.map((job, i) => (<Card bg='success' text='light' key={ i }>{ job }</Card>))
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
  const statusColor = status === 'Alive' ? 'success' : status === 'Deceased' ? 'danger' : 'warning'
  
  return (
  <CharacterCard>
    <Card.Img variant="top" src={ img } fluid/>
      <Card.Header>
        <Card.Title>{ name } <Badge variant={ statusColor }>{ status }</Badge></Card.Title>
        <Card.Text>{ nickname }</Card.Text>
        <small>- { portrayed }</small>
      </Card.Header>
      <Card>
      <Card.Body>
        <b>Occupations</b>
        <OccupationList />
        <b>Breaking Bad</b>
        <SeasonsList />
    </Card.Body>
      </Card>
  </CharacterCard>
  )
}

const CharacterCard = styled(Card)`
  position: relative;
  box-shadow: 0 0 8px 1px rgba(0,0,0,0.1);

  .card-img-top, & > .card {
    height: 25rem;
  }

    .card-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  & > .card {
    display: none;
    text-align: center;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 8px 1px rgba(0,0,0,0.3);
    
    & > .card {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
      background: inherit;
      border-radius: inherit;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      &, div {
        opacity: 0.9;
      }
    }
  }
`
const Occupations = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  grid-auto-rows: minmax(1rem, auto);
  gap: .5rem;

  .card {
    padding: .5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    font-weight: bold;
    box-shadow: 0 0 8px 1px rgba(0,0,0,0.1);
  }
`
const Seasons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(2rem, 1fr));
  gap: .5rem;

  .badge {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 8px 1px rgba(0,0,0,0.1);
  }
`