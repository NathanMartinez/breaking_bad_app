import { ListGroup } from 'react-bootstrap'

export default function OccupationList({occupations}) {
  let result = !occupations ? '' : occupations.map((job, index) => <ListGroup.Item key={index} variant="dark">{job}</ListGroup.Item>)
  return (
    <ListGroup variant="flush">{result}</ListGroup>
  )
}
