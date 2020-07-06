import React, {useState, useEffect} from "react";
import DatingCard from '../components/datingcard';
import API from "../utils/API";

function Matches(){
    const [users, setUsers] = useState([])
    useEffect(() => {
    loadUsers()
      }, [])
    
      // Loads all books and sets them to books
      function loadUsers() {
        API.getUsers()
          .then(res => 
            setUsers(res.data)
          )
          .catch(err => console.log(err));
      };
    return (
        <div>
        {users.map(user => <DatingCard user = {user} image = './image-assets/profile-2398782_640.png'/>)}
        </div>
    );
}

export default Matches;