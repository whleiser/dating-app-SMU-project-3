import React from 'react'
import {
  Text,
  Flex,
} from 'rebass'

function Footer(){
return(
<Flex
  px={2}
  color='white'
  bg='black'
  alignItems='center'>
  <Text p={2} fontWeight='bold'>LinkUp</Text>
</Flex>
);
}

export default Footer;