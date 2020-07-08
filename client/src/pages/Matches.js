import React, {useState, useEffect} from "react";
import DatingCard from '../components/datingcard';
import API from "../utils/API";
import {
    Flex,
  Card,
  Text,
  Image,
  Box,
  Heading,
  Button,
  Link
} from 'rebass'

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
        <Box mx={'auto'} px={2} py={2}>
            <Heading>Here are the best matches we found for you</Heading>
             <Box>
                    {users.map(user => <DatingCard key={user.id} user = {user} image = './image-assets/profile-2398782_640.png'/>)}
            </Box>
        </Box>
    );
}

export default Matches;