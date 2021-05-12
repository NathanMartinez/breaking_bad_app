import { Badge, Card } from 'react-bootstrap'

import styled from 'styled-components'

export default function CharacterHeader({ headerInfo }) {
  const { name, status, nickname, portrayed } = headerInfo

  const statusColor = status === 'Alive' ? 'success' : status === 'Deceased' ? 'danger' : 'warning'

  return (
    <Header>
      <Card.Title>{ name }</Card.Title>
        <Card.Text>{ nickname }</Card.Text>
        <small>- { portrayed }</small>
      <Badge variant={ statusColor }>{ status }</Badge>
    </Header>
  )
}
const Header = styled(Card.Header)`
  position: relative;

    .badge {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
    }
`