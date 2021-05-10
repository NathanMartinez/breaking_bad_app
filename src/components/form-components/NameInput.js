import { Form } from 'react-bootstrap'
import { useContext } from 'react'
import { FormContext } from '../../providers/FormContextProvider'

export default function NameInput() {
  const { 
    globalState: { 
      searchText, 
      setSearchText 
    } 
  } = useContext(FormContext)

  const handleChange = (e) => {
    const { value } = e.target
    setSearchText(value)
  }

  return (
    <Form.Group>
      <Form.Label>Name: </Form.Label>
      <Form.Control type='text' onChange={handleChange} value={searchText} />
    </Form.Group>
  )
}
