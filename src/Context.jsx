import { createContext, useState } from "react";

function Context() {
  const ThemeContext = createContext()

  function ThemeProvider({children}){
    const [theme, setTheme] = useState(false)
    const changeTheme = () => setTheme((prev) => !prev)
    const themeState = {theme, changeTheme}

    return (
        <ThemeContext.Provider value={themeState}>
            {children}
        </ThemeContext.Provider>
    )
  }

  return {
    ThemeContext,
    ThemeProvider
    }
}

export default Context()