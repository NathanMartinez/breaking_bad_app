import { Form } from 'react-bootstrap'

export default function SearchInput() {
  const handleChange = (e) => {
    const {name, value} = e.target
  }

  return (
    <>
      <Form.Label>{}</Form.Label>
      <Form.Control type='text' onChange={handleChange} />
    </>
  )
}
