import React, { createContext, useContext, useState } from 'react'
import "./style.css"

const ThemeContext = createContext();


function UseContextExample2() {

    const [theme, setTheme] = useState("light")

  return (
    <div>
        <ThemeContext.Provider value={theme}>
            <Form/>
            {/* <button onClick={() => {
            }}> 
                Switch to light theme
            </button> */}

            <label>
                <input type="checkbox"
                    checked={theme === "dark"}
                    onChange={(e) => {
                        setTheme(e.target.checked ? "dark" : "light")
                    }}
                />
                Use dark mode
            </label>
            
        </ThemeContext.Provider>
    </div>
  )
}

function Form(){
    return (
        <>
            <Panel title="welcome">
                <Button>Sign up</Button>
                <Button>Log in</Button>
            </Panel>
        </>
    )
}

function Panel({title, children}){

    const theme = useContext(ThemeContext);

    const className = 'panel-' + theme;

    return (
        <>
            <section className={className}>
                <h1>{title}</h1>
                {children}
            </section>
        </>
    )
}

function Button({children}){

    const theme = useContext(ThemeContext);

    const className = 'button-' + theme;

    return (
        <>
            <button className={className}>{children}</button>
        </>
    )
}



export default UseContextExample2