import React from 'react'
import { Routes, Route, useParams, Link } from "react-router-dom";
import Card from "../AllExample/Card";
import ProductDetails from "../AllExample/ProductDetails";

const UserList = () => {

    return (
        <>
            <h1>User List</h1>
            <nav>
                <ul>
                      {
                        data.map((data) => (
                            <li><Link to={`/data/${data.id}`}>Product name:- {data.title} |   Product description:-  {data.description}</Link></li>
                        ))
                    }
                </ul>
            </nav>
        </>
    )
}

const UseProfile = () => {

    const { id } = useParams();

    const person = data.find(val => val.id === Number(id));

    return (
        <>
            <h1>User Profile id: {person.price}</h1>
            <Button variant="contained">Hello world</Button>
        </>
    )
}

function DynamicLinks() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Card />} />
                <Route path='/data/:id' element={<ProductDetails />} />
                {/* <Route path='/card' element={<Userard />} /> */}
            </Routes>
        </>
    )
}

export default DynamicLinks