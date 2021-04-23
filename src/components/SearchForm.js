import { useState } from 'react'
import { Card, Form } from 'react-bootstrap'
import { getRandomChar } from '../utilities'
import InputOptions from './InputOptions'
import DropdownMenu from './DropdownMenu'

export default function SearchForm({setData}) {
  const initalState = {searchState: 'random'}
  const [options, setOptions] = useState(initalState)

  const parsedName = () => {
    let { searchState } = options
    if (searchState === 'id') return searchState.toUpperCase()
    return searchState[0].toUpperCase() + searchState.slice(1)
  }

  const handleSubmit = (e) => {
    let { searchState } = options
    e.preventDefault()
    if (searchState === 'random') getRandomChar(setData)
  }

  return (
      <>
        <Card.Title>Breaking Bad Search</Card.Title>
        <Form onSubmit={handleSubmit}>
          {options.searchState === 'random' ? '' : <InputOptions name={parsedName()} setState={setOptions}/>}
          <DropdownMenu name={parsedName()} setState={setOptions} handleSubmit={handleSubmit}/>
        </Form>
      </>
  )
}
