import { Dropdown, Button, ButtonGroup } from 'react-bootstrap'
import { useContext } from 'react'
import { FormContext } from '../providers/FormContextProvider'
import { useQuery } from 'react-query'
import { getRandomCharacters } from '../queries/characters'

export default function DropdownButton() {
  const { globalState: { labelName, setSearchOption, setLabelName, setIsRandom, limit } } = useContext(FormContext)

  // const { status, data } = useQuery("characters", getRandomCharacters);

  // if (status === "loading") return <p>Loading...</p>;
  // if (status === "error") return <p>Error :(</p>;
  //   if (data) return <div>{JSON.stringify(data)}</div>

  const handleSelect = (eventKey) => {
    let parsedName = eventKey[0].toUpperCase() + eventKey.slice(1)
     if (eventKey === 'id') parsedName = eventKey.toUpperCase()
     if (eventKey !== 'random') setIsRandom(false)
     if (eventKey === 'random') setIsRandom(true)
    setLabelName(parsedName)
    setSearchOption(eventKey)
  }

  const handleSubmit = (e) => {
    
  }
  
  return (
    <Dropdown as={ButtonGroup} onSelect={handleSelect} >
      <Button onClick={handleSubmit} >{labelName} Search</Button>
      <Dropdown.Toggle split id="dropdown-split-basic" />
      <Dropdown.Menu>
        <Dropdown.Item eventKey="id" >ID Search</Dropdown.Item>
        <Dropdown.Item eventKey="name" >Name Search</Dropdown.Item>
        <Dropdown.Item eventKey="random" >Get Random Character</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
