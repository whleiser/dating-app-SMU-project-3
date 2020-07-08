import React from 'react'
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

function AboutBody(){
    return (
    <Box>
        <Box px={2} mx={'auto'}>
        <Heading
        fontSize={[ 5, 6, 7 ]}
        color='primary'>
        LinkUp
        </Heading>
        </Box>
        <Box px={3}>
        <Flex mx={-2} mb={3}>
        <Text maxWidth={650}>
            LinkUp is a dating app focused on matching users based on similar hobbies and interests. LinkUp avoids using the typical swipe/like routine in an effort to make meaningful connections that are meant to last. Give your thumbs a rest and let LinkUp do the work for you by finding matches based on your personalized filters. Your perfect match is out there, click <Link href='/create'>here</Link> to get started, or <Link href='/login'>login</Link> if you have already created an account.
        </Text>
        </Flex>
        </Box>
      </Box>
    );
}
export default AboutBody;