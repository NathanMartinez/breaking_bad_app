import { Button, Card, Form } from 'react-bootstrap'
import NameInput from './NameInput'

export default function SearchForm() {

  return (
    <Card.Body>
      <Form>
        <NameInput />
        <Button>Search</Button>
      </Form>
    </Card.Body>
  )
}
