import React from 'react'
import {
  Card,
  Text,
  Flex,
  Image
} from 'rebass'

function DatingCard(props){
return(
<Flex>
  <Card width={[ 256, 320 ]} mx='auto'>
    <Image src='https://source.unsplash.com/random/512x384?space' />
    <Text> 
      {props.user.name}
      {props.user.bio} 
    </Text>
  </Card>
</Flex>

);
}

export default DatingCard;

