import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import DatingCard from '../components/datingcard';
import ProfileForm from '../components/profileform';
import {
  Heading,
  Flex,
  Box
} from 'rebass';

function UpdateProfile(props) {
    const [match, setMatch] = useState({})
  
    // When this component mounts, grab the book with the _id of props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    const {id} = useParams()
    useEffect(() => {
      API.getMatch(id)
        .then(res => setMatch(res.data))
        .catch(err => console.log(err));
    })
  
    return (
      <div>
     <Heading
  fontSize={[ 5, 6, 7 ]}
  color='primary'>
  View and Update your LinkUp Profile
</Heading>
<DatingCard></DatingCard>
        <ProfileForm></ProfileForm>
        </div>
      );
    }
  
  
  export default UpdateProfile;
  