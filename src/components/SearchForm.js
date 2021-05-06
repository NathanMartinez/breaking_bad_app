import { Card, Form } from 'react-bootstrap'
import { getRandomChar } from '../utilities'
import InputOptions from './InputOptions'
import DropdownMenu from './DropdownMenu'

export default function SearchForm({state}) {
  const { values: {searchOptions}, setValues: { setData, setLoading } } = state

  const parsedName = () => {
    if (searchOptions === 'id') return searchOptions.toUpperCase()
    return searchOptions[0].toUpperCase() + searchOptions.slice(1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchOptions === 'random') getRandomChar(setData, setLoading)
  }

  return (
      <>
        <Card.Title>Breaking Bad Search</Card.Title>
        <Form onSubmit={handleSubmit}>
          <InputOptions name={parsedName()} state={state} />
          <DropdownMenu name={parsedName()} state={state} />
        </Form>
      </>
  )
}
