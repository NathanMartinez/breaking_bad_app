import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext()

export const useThemeContext = () => {
  return useContext(ThemeContext)
}

export default function ThemeContextProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false)

  const useTheme = () => {
    if (!darkTheme) return ({ variant: 'dark', text: 'light', bg: 'dark' })
    return { variant: 'light', text: 'black', bg: 'light' }
    }

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme, useTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}
