import React, { createContext, useContext, useState } from 'react'

const TemeContext = createContext(null);
const CurrentUserContext = createContext(null);

function UseContextExample4() {

    const [theme, setTheme] = useState("light");
    const [currentUser, setCurrentUser] = useState(null);

  return (
    <div>
        <TemeContext.Provider value={theme}>
            <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
                <WelcomePanel/>
                <label>
                    <input type="checkbox"
                        checked={theme==="dark"}
                        onChange={(e) => {
                            setTheme(e.target.checked ? "dark" : "light")
                        }}
                    />
                Use dark mode
                </label>
            </CurrentUserContext.Provider>
        </TemeContext.Provider>
    </div>
  )
}

function WelcomePanel(){

    const {currentUser} = useContext(CurrentUserContext);

    return (
        <>
            <Panel title="Welcome">
                {currentUser !== null ?
                    <Greeting /> :
                    <LoginForm/>    
            }
            </Panel>
        </>
    )
}

function Greeting(){
    const {currentUser} = useContext(CurrentUserContext);
     return (
        <>
            <p>You logged in as {currentUser.name}</p>
        </>
     )
}

function LoginForm(){

    const {setCurrentUser} = useContext(CurrentUserContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const canLogin = firstName.trim() !== "" && lastName.trim()  !== "";

    return (
        <>
            <label>
                First name{": "}
                <input type="text"
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value)
                        }}
                />
            </label>
            <label>
                Last name{": "}
                <input type="text"
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value)
                        }}
                />
            </label>
            <Button
                disabled={!canLogin}
                onClick={() => {
                    setCurrentUser({
                        name: firstName + " " + lastName
                    })
                }}
            >
                Login in
            </Button>
            {!canLogin && <p>Fill in both filed</p>}
        </>
    )
}

function Button({children, disabled, onClick }){
    const theme = useContext(TemeContext);
    const className = "panel-" + theme
    return (
        <>
            <button className={className} disabled={disabled} onClick={onClick}>
                {children}
            </button>
        </>
    )
}


function Panel({title, children}){
    const theme  = useContext(TemeContext);
    const className = "panel-" + theme;
    return (
        <>
            <section className={className}>
                <h1>{title}</h1>
                {children}
            </section>
        </>
    )
}

export default UseContextExample4