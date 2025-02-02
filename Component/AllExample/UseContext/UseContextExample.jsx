import React, { createContext, useState } from 'react'
import UseContextChild1 from "./UseContextChild1";
import "./style.css"

const themeContext = createContext();

function UseContextExample() {

  const [theme, setTheme] = useState("light");

  return (
    <div>

      <themeContext.Provider value={{theme, setTheme}}>
          <div id='container' style={{backgroundColor: theme==="light"? "beige": "black"}}>
            <UseContextChild1/>
          </div>
      </themeContext.Provider>

    </div>
  )
}

export default UseContextExample
export {themeContext}