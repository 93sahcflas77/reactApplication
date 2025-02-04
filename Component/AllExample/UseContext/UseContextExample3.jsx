import React, { createContext, useContext, useState } from 'react'

const CurrentUserContext = createContext(null);

function UseContextExample3() {

    const [currentUser, setCurrentUser] = useState(null);

  return (
    <div>
            <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
                <Form/>
            </CurrentUserContext.Provider>
    </div>
  )
}


function Form(){
    return (
        <Panel title="welcome">
            <LoginButton/>
        </Panel>
    )
}

function LoginButton(){
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext);

    if(currentUser !== null){
        return <p>You logged in as {currentUser.name}</p>
    }

    return (
        <>
            <Button onClick={() => {
                setCurrentUser({name: "chandan"});
            }}>
                Log in as Chandan
            </Button>
        </>
    )
}

function Button({children, onClick}){
    return (
        <>
            <button className="button" onClick={onClick}>{children}</button>
        </>
    )
}

function Panel({title, children}){
    return (
        <>
            <section>
                <h1>{title}</h1>
                {children}
            </section>
        </>
    )
}

export default UseContextExample3