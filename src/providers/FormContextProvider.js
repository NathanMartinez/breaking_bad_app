import React, { useState } from 'react'

export const FormContext = React.createContext()

export default function FormContextProvider({ children }) {
  const [searchText, setSearchText] = useState('')
  const [limit, setLimit] = useState(1)
  const [searchOptions, setSearchOptions] = useState('random')

  const globalState = {
    searchText, 
    setSearchText, 
    limit, 
    setLimit, 
    searchOptions, 
    setSearchOptions
  }
  
  return (
    <FormContext.Provider value={ globalState }>
      { children }
    </FormContext.Provider>
  )
}
