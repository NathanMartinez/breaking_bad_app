import React, { useState } from 'react'

export const FormContext = React.createContext()

export default function FormContextProvider({ children }) {
  const [limit, setLimit] = useState(1)
  const [searchText, setSearchText] = useState('')
  const [searchOption, setSearchOption] = useState('random')
  const [labelName, setLabelName] = useState('Random')

  const globalState = {
    searchText, 
    setSearchText, 
    limit, 
    setLimit, 
    searchOption, 
    setSearchOption,
    labelName,
    setLabelName
  }
  
  return (
    <FormContext.Provider value={{ globalState }}>
      { children }
    </FormContext.Provider>
  )
}
