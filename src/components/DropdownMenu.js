import {Dropdown, Button, ButtonGroup} from 'react-bootstrap'

export default function DropdownMenu({name, setState, handleSubmit}) {
  const handleSelect = (eventKey) => {
    setState(prev => ({...prev, searchState: eventKey}))
  }
  
  return (
    <Dropdown as={ButtonGroup} onSelect={handleSelect} >
      <Button onClick={handleSubmit}>{name} Search</Button>
      <Dropdown.Toggle split id="dropdown-split-basic" />
      <Dropdown.Menu>
        <Dropdown.Item eventKey="id">ID Search</Dropdown.Item>
        <Dropdown.Item eventKey="name">Name Search</Dropdown.Item>
        <Dropdown.Item eventKey="random">Get Random Character</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
