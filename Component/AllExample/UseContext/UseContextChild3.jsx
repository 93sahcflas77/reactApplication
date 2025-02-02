import React, { useContext } from 'react'
import { themeContext } from "./UseContextExample";

function UseContextChild3() {

  const {theme, setTheme} = useContext(themeContext);

  const themeChangeHansle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  
  return (
    <div>
          <button onClick={themeChangeHansle}> 
            Change theme
          </button>
    </div>
  )
}

export default UseContextChild3