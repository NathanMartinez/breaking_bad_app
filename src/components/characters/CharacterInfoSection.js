import { Card } from 'react-bootstrap'

import { useThemeContext } from '../../context/ThemeContext'

import SeasonsList from './SeasonsList'
import OccupationList from './OccupationList'

import styled from 'styled-components'

export default function CharacterInfoSection({ bodyInfo }) {
  const { darkTheme } = useThemeContext()

  const { occupation, appearance } = bodyInfo

  return (
    <InfoSection bg={ darkTheme ? 'light' : 'dark' } text={ darkTheme ? 'dark' : 'light' }>
      <Card.Body>
        <OccupationList occupation={ occupation } />
        <SeasonsList appearance={ appearance } />
      </Card.Body>
    </InfoSection>
  )
}
const InfoSection = styled(Card)`
  display: none;
  position: absolute;
  height: 25rem;
  text-align: center;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: inherit;
  border-radius: inherit;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;

    .card-body {
      display: flex;
      flex-direction: column;
      align-item: center;
      justify-content: space-evenly;
    }
    &, > * {
      opacity: 0.8;
    }
`