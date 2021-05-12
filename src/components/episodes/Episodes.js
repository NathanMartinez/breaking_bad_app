import { Card } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { useThemeContext } from '../../context/ThemeContext'

import Episode from './Episode'
import Loading from '../utilities/Loading'

import styled from "styled-components";

const getEpisodes = async () => {
   const res = await fetch(`https://www.breakingbadapi.com/api/episodes`)
    return await res.json()
}

export default function Episodes() {
    const { darkTheme, useTheme } = useThemeContext()
    const { bg, text } = useTheme()

    const { data, status } = useQuery('episodes', getEpisodes) 
  
    if (status === 'error') return <h1>Error :(</h1>
    if (status === 'loading') return <Loading />

    const result = data.map((episode, i) => <Episode key={ i } _episode={ episode }/>)

    return (
        <EpisodeContainer bg={ darkTheme ? "secondary" : "secondary" }>
            <Card.Body>
                { result }
            </Card.Body>
        </EpisodeContainer>
    )
}
const EpisodeContainer = styled(Card)`
& > .card-body {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-auto-rows: minmax(10rem, auto);
    gap: 1.5rem;
  }
  `