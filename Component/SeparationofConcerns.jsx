import React, {useState, useEffect} from 'react'


const UserList = ({user}) => {
    return(
        <div>
            <h1>User List</h1>
            <ul>
                {user.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}

            </ul>
        </div>
    )
};



const UseFetchUsers = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {

        const fetchUser = async () => {
            const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await reponse.json();

            setUser(data);
        }

        fetchUser()

    }, [])

    return user;

}


function SeparationofConcerns() {

    const user = UseFetchUsers();

  return (
    <>
    <UserList user={user} />
    </>
  )
}

export default SeparationofConcerns


