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
  <Box py={1}>
  <Link variant='nav' href='/' p={2} fontSize={2} fontWeight='bold'
  sx={{
    display: 'inline-block',
    color: 'primary',
    bg: 'white',
    px: 2,
    py: 2,
    borderRadius: 9999,
    }}>
    LinkUp</Link>
    </Box>
  <Box mx='auto' />
  <Link variant='nav' href="/create" p={2}>Create Profile</Link>
  <Link variant='nav' href="/update" p={2}>Update Profile</Link>
  <Link variant='nav' href="/matches" p={2}>View Matches</Link>
</Flex>
);
}

export default Header;
