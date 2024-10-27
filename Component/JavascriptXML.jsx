import React from 'react'

const Greeting = ({name}) =>{

    const isMoring = new Date().getHours < 12;

    return(
        <>
            <h1>Hello: {name}</h1>
            <p>Good: {isMoring ? "Moring" : "Evening"}</p>
            <p>The cureent tine is: {new Date().toString()}</p>
        </>
    )
}

function JavascriptXML() {
  return (
    < Greeting name={"chanan thakur"}/>
  )
}

export default JavascriptXML