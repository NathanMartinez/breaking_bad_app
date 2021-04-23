import { useState } from 'react'
import { Card, Form, Button, Dropdown, ButtonGroup } from 'react-bootstrap'
import InputOptions from './InputOptions'
import DropdownMenu from './DropdownMenu'

export default function SearchForm() {
  const initalState = {searchState: 'random'}
  const [options, setOptions] = useState(initalState)

  const parsedName = () => {
    let { searchState } = options
    if (searchState === 'id') return searchState.toUpperCase()
    return searchState[0].toUpperCase() + searchState.slice(1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setOptions(initalState)
  }

  return (
      <>
        <Card.Title>Breaking Bad Search</Card.Title>
        <Form onSubmit={handleSubmit}>
          {options.searchState === 'random' ? '' : <InputOptions name={parsedName()} setState={setOptions}/>}
          <DropdownMenu name={parsedName()} setState={setOptions} />
        </Form>
      </>
  )
}
