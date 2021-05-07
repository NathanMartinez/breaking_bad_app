import React, { useContext } from 'react'
import { FormContext } from '../providers/FormContextProvider'

export const QueryContext = React.createContext()

export default function QueryContextProvider({ children }) {
  const { globalState: { limit } } = useContext(FormContext)
  return (
    <QueryContext.Provider value={limit}>
      { children }
    </QueryContext.Provider>
  )
}
