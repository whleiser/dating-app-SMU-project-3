import React, {useState, useEffect} from "react";
import DatingCard from '../components/datingcard';
import API from "../utils/API";

function Matches({user}){
    const [users, setUsers] = useState([])
    useEffect(() => {
    loadUsers()
      }, [])
    
      // Loads all users and sets them to users
      function loadUsers() {
        API.getFilteredUsers()
          .then(res => 
            setUsers(res.data)
          )
          .catch(err => console.log(err));
      };
    return (
        <div>
        {users.map(user => <DatingCard key={user.id} user = {user} image = './image-assets/profile-2398782_640.png'/>)}
        </div>
    );
}

export default Matches;