import { Badge } from 'react-bootstrap'
import { useThemeContext } from '../../context/ThemeContext'
import styled from 'styled-components'

export default function OccupationList({ occupation }) {
  const { darkTheme } = useThemeContext()

  let list = occupation.map((job, i) => (<Badge variant={ darkTheme ? 'dark' : 'success' } key={ i }>{ job }</Badge>))

  return (
    <Occupations>
      <b>Occupations</b>
      <div>{ list }</div>
    </Occupations>
  )
}
const Occupations = styled.div`
& > div {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-auto-rows: minmax(1rem, auto);
  gap: .5rem;

    .badge {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
}
`