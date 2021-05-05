import { Form } from 'react-bootstrap'

export default function SearchInput({name, handleChange}) {
  return (
    <>
      <Form.Label>{name}</Form.Label>
      <Form.Control type='text' onChange={handleChange} />
    </>
  )
}
