import React, { useState } from 'react'

export const FormContext = React.createContext()

export default function FormContextProvider({ children }) {
  const [limit, setLimit] = useState(3)
  const [searchText, setSearchText] = useState('')
  const [searchOption, setSearchOption] = useState('random')
  const [labelName, setLabelName] = useState('Random')
  const [isRandom, setIsRandom] = useState(true)

  const maxLimit = 10

  const globalState = {
    searchText, 
    setSearchText, 
    limit, 
    setLimit, 
    searchOption, 
    setSearchOption,
    labelName,
    setLabelName,
    maxLimit,
    isRandom,
    setIsRandom
  }
  
  return (
    <FormContext.Provider value={{ globalState }}>
      { children }
    </FormContext.Provider>
  )
}
