import { Card } from 'react-bootstrap'

import { useThemeContext } from '../../context/ThemeContext'

import CharacterInfoSection from './CharacterInfoSection'
import CharacterCardHeader from './CharacterHeader'

import styled from 'styled-components'

export default function Character({ character }) {
  const { darkTheme } = useThemeContext()

  const { 
    img, 
    name, 
    nickname, 
    status, 
    portrayed, 
    occupation, 
    appearance, 
  } = character
  
  return (
  <CharacterCard bg={ darkTheme ? 'dark' : 'light' } text={ darkTheme ? 'light' : 'dark' } >
    <Card.Img variant="top" src={ img } fluid/>
    <CharacterCardHeader headerInfo={{ name, nickname, status, portrayed }} />
    <CharacterInfoSection bodyInfo={{ occupation, appearance }} />
  </CharacterCard>
  )
}

const CharacterCard = styled(Card)`
  box-shadow: 0 0 8px 1px rgba(0,0,0,0.1);
  border: none;

    .card-img-top {
      height: 25rem;
    }

    &:hover {
      cursor: pointer;
      box-shadow: 0 0 8px 1px rgba(0,0,0,0.3);

        & > .card {
          display: flex;
        }
    }
`