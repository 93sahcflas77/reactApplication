// function component props
// import React from 'react'

// const Greating = ({name}) => {
//     return <h1>{`Hello ${name}`}</h1>
// }

// function Props() {
//   return (
//     <Greating name="Chandan thakur" />
//   )
// }

// export default Props


// classes compoonent props
// import React, { Component } from 'react'

// class Greeting extends Component {
//     render() {
//       return (
//         <>
//         <h1>Hello {this.props.name}</h1>
//         <p>Your age {this.props.age}</p>
//         </>
//       )
//     }
//   }

// class Props extends Component {
//   render() {
//     return (
//         <>
//         <Greeting name="Chandan Thakur" age="22" /> 
//         <Greeting name="Ravi Gupta" age="25" /> 
//         </>
//     )
//   }
// }

// export default Props

// function component function props

import React from 'react'

const Clickbutton = ({onClick}) => {
    return <button onClick={onClick}>Click</button>
}

function Props() {

    const Greating = () => {
        alert("Hello chandan welcome to my world");
    }

  return (
    < Clickbutton onClick={Greating}/>
  )
}

export default Props