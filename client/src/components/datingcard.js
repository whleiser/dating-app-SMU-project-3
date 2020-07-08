import React from 'react'
import {
  Card,
  Text,
  Image,
  Box,
  Heading
} from 'rebass'

function DatingCard(props){
return(
<Box width={[1, .5]}>
<Card
      sx={{
        p: 1,
        borderRadius: 2,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
      }}>
      <Image src={props.image} 
      sx={{
      width: [ '60%', '30%' ],
      height: [ '60%', '30%' ],
      borderRadius: 8,
      }} />
      <Box px={2}>
        <Heading as='h3'>
          {props.user.name} {props.user.age}
        </Heading>
        <Text fontSize={0}>
          {props.user.bio}
        </Text>
      </Box>
    </Card>
</Box>

);
}

export default DatingCard;

