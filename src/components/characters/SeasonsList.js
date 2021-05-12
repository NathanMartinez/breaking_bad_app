import { Badge } from 'react-bootstrap'

import { useThemeContext } from '../../context/ThemeContext'

import styled from 'styled-components'

export default function SeasonsList({ appearance }) {
  const { darkTheme } = useThemeContext()
  
  let list = appearance.map((season, i) => (<Badge pill variant={ darkTheme ? 'dark' : 'success' } key={ i }>Season: { season }</Badge>))

  return (
    <Seasons>
      <b>Breaking Bad</b>
      <div>{ list }</div>
    </Seasons>
  )
  }
  const Seasons = styled.div`
  & > div {
    display: grid;
    grid-template-columns: repeat(2, minmax(2rem, 1fr));
    gap: .5rem;

      .badge {
        display: flex;
        align-items: center;
        justify-content: center;
      }
  }
`