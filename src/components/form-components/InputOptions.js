import { Form, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap'
import { useContext } from 'react'
import { FormContext } from '../../providers/FormContextProvider'

export default function InputOptions() {
  const { globalState: { limit, setLimit, labelName } } = useContext(FormContext)

  const generateSelect = (count) => {
    let result = []
    for (let i = 0; i < count; i++) {
      const value = i + 1
        result.push(<option key={i} value={value} >{value}</option>)
    }
    return result
  }

  const handleSelect = (e) => {
    const { value } = e.target
    setLimit(value)
    console.log(value);
  }

  const selectOptions = generateSelect(10)

  return (
    <Form.Group controlId="exampleForm.ControlSelect1">

    <Form.Label>Count</Form.Label>
    <Form.Control as="select" onChange={handleSelect} custom>
      { selectOptions }
    </Form.Control>
  </Form.Group>
  )
}
