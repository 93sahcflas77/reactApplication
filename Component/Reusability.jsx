import React from 'react'

const Button = ({label, onClick , color}) => {
    return <button onClick={onClick} style={{backgroundColor: color}}>{label}</button>
}

function Reusability() {

    const heandle = (message) => {
        alert(message);
    }

  return (
    <>
    < Button color="red" onClick={() => heandle("Button 1 clicked")} label="Click me" />
    < Button color="blue" onClick={() => heandle("Button 2 clicked")} label="Click me" />
    < Button color="yellow" onClick={() => heandle("Button 3 clicked")} label="Click me" />
    </>
  )
}

export default Reusability