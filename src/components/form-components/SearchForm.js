import { Card, Form } from 'react-bootstrap'
import NameInput from './NameInput'
import DropdownButton from './DropdownButton'

export default function SearchForm() {

  return (
    <Card.Body>
      <Card.Title>Breaking Bad Search</Card.Title>
      <Form>
        <NameInput />
        <DropdownButton  />
      </Form>
    </Card.Body>
  )
}
