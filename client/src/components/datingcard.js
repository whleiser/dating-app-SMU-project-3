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
<Box width={[1, .8]}>
<Card
      sx={{
        p: 1,
        borderRadius: 2,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
      }}>
      <Image src={props.image} 
      sx={{
      width: [ '50%', '25%' ],
      height: [ '50%', '25%' ],
      borderRadius: 8,
      }} />
      <Box px={2}>
        <Heading as='h3'>
          {props.user.name}
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

