import { Form } from 'react-bootstrap'

export default function InputOptions({name, setState}) {
  const handleChange = (e) => {
    const {name, value} = e.target
    setState(prev => ({...prev, [name]: value}))
  } 

  return (
    <Form.Group>
      <Form.Label>{name}</Form.Label>
      <Form.Control type='text' onChange={handleChange} />
    </Form.Group>
  )
}
