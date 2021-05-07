import { Card, Form } from 'react-bootstrap'
import { useContext } from 'react'
import { FormContext } from '../../providers/FormContextProvider'
import SearchInput from './SearchInput'
import InputOptions from './InputOptions'
import DropdownButton from './DropdownButton'

export default function SearchForm() {
  const { globalState: { isRandom } } = useContext(FormContext)

  return (
    <Card.Body>
      <Card.Title>Breaking Bad Search</Card.Title>
      <Form>
        {!isRandom && <SearchInput />}
        <InputOptions  />
        <DropdownButton  />
      </Form>
    </Card.Body>
  )
}
