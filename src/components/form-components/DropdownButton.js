import { Dropdown, Button, ButtonGroup } from 'react-bootstrap'
import { useContext } from 'react'
import { FormContext } from '../../providers/FormContextProvider'

export default function DropdownButton() {
  const { globalState: { labelName, setSearchOption, setLabelName, setIsRandom } } = useContext(FormContext)

  const handleSelect = (eventKey) => {
    let parsedName = (eventKey === 'id') ? eventKey.toUpperCase() : eventKey[0].toUpperCase() + eventKey.slice(1)
    (eventKey === 'random') ? setIsRandom(true) : setIsRandom(false)
    setLabelName(parsedName)
    setSearchOption(eventKey)
  }

  const handleSubmit = (e) => {
 
  }
  
  return (
    <Dropdown as={ButtonGroup} onSelect={handleSelect} >
      <Button onClick={handleSubmit}>{labelName} Search</Button>
      <Dropdown.Toggle split id="dropdown-split-basic" />
      <Dropdown.Menu>
        <Dropdown.Item eventKey="id" >ID Search</Dropdown.Item>
        <Dropdown.Item eventKey="name" >Name Search</Dropdown.Item>
        <Dropdown.Item eventKey="random" >Get Random Character</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
