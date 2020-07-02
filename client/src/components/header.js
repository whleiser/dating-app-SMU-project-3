import React from 'react'
import {
  Box,
  Flex,
  Link
} from 'rebass'

function Header(){
return(
<Flex
  px={2}
  color='white'
  bg='black'
  alignItems='center'>
  <Link variant='nav' href='/' p={2} fontWeight='bold'>LinkUp</Link>
  <Box mx='auto' />
  <Link variant='nav' href="/create" p={2}>Create Profile</Link>
  <Link variant='nav' href="/update" p={2}>Update Profile</Link>
  <Link variant='nav' href="/matches" p={2}>View Matches</Link>
</Flex>
);
}

export default Header;
