import React from 'react'
import {
  Text,
  Flex,
  Box,
} from 'rebass'

function Footer(){
return(
<Flex
  px={2}
  color='white'
  bg='black'
  alignItems='center'>
  <Box py={1}>
  <Text fontSize={2} fontWeight='bold'
  sx={{
    display: 'inline-block',
    color: 'primary',
    bg: 'white',
    px: 2,
    py: 2,
    borderRadius: 9999,
    }}>LinkUp</Text>
    </Box>
  <Text p={2} fontSize={2}>updated July 8, 2020</Text>
</Flex>
);
}

export default Footer;