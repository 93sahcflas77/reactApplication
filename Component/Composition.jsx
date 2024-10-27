import React from 'react'

function Card({ children  }){
    return (
        <div style={{backgroundColor: "red"}} className='card'>{children }</div>
    )
}

function Composition() {
  return (
    <>
        <Card>
            <h2>This is the tittle</h2>
            <p>This is some decription text inside the card</p>
        </Card> <br /> <br />

        <Card>
            <button>Click Me!</button>
        </Card>
    </>
  )
}

export default Composition

