import { Form } from 'react-bootstrap'

export default function InputOptions() {
  const generateSelect = (count) => {
    let result = []
    for (let i = 0; i < count; i++) {
        result.push(<option key={i}>{i + 1}</option>)
    }
    return result
  }
  const selectOptions = generateSelect(10)

  return (
    <Form.Group>
      <Form.Label>Count</Form.Label>
      <Form.Control as="select">
        { selectOptions }
    </Form.Control>
    </Form.Group>
  )
}
