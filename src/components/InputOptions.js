import { Form } from 'react-bootstrap'
import SearchInput from './SearchInput'

export default function InputOptions({ name, state: { values: { searchOptions }, setValues }}) {
  const handleChange = (e, setState) => {
    const { value } = e.target
    setState(value)
  } 
  const generateSelect = (count) => {
    let result = []
    for (let i = 0; i < count; i++) {
        result.push(<option key={i}>{i+1}</option>)
      }
    return result
  }

  return (
    <Form.Group>
      { searchOptions !== 'random' ? (<SearchInput name={name} handleChange={handleChange}/>) : ''}
      <Form.Label>Count</Form.Label>
      <Form.Control as="select">
        {generateSelect(10)}
    </Form.Control>
    </Form.Group>
  )
}
