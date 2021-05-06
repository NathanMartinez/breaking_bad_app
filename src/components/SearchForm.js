import { useContext } from 'react'
import { Card, Form } from 'react-bootstrap'
import InputOptions from './InputOptions'
import DropdownButton from './DropdownButton'
import { FormContext } from '../providers/FormContextProvider'

export default function SearchForm() {
  const { globalState: { limit } } = useContext(FormContext)

  console.log(limit);

  return (
    <Card.Body>
      <Card.Title>Breaking Bad Search</Card.Title>
      <Form>
        <InputOptions  />
        <DropdownButton  />
      </Form>
    </Card.Body>
  )
}
