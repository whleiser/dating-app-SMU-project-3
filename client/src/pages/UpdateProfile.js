import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import Header from '../components/header';
import Footer from '../components/footer';
import DatingCard from '../components/datingcard';
import {
  Text,
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
        <Header></Header>
        <Flex alignItems='center'>
          <Box width={1/3} px={2}>
            <Text p={1} color='background' bg='primary'>
              {match.firstName} {match.lastname}
            </Text>
          </Box>
        </Flex>
        <Box
            sx={{
            maxWidth: 512,
            mx: 'auto',
            px: 3,
        }}>
        <DatingCard></DatingCard>
        </Box>
        <Footer></Footer>
        </div>
      );
    }
  
  
  export default UpdateProfile;
  