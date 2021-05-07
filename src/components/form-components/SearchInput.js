import { Form } from 'react-bootstrap'
import { useContext } from 'react'
import { FormContext } from '../../providers/FormContextProvider'

export default function SearchInput() {
  const { 
    globalState: { 
      labelName, 
      searchText, 
      setSearchText 
    } 
  } = useContext(FormContext)

  const handleChange = (e) => {
    const { value } = e.target
    setSearchText(value)
  }

  return (
    <>
      <Form.Label>{labelName}</Form.Label>
      <Form.Control type='text' onChange={handleChange} value={searchText} />
    </>
  )
}
