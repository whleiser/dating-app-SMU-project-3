import React from 'react'
import {
    Flex,
  Card,
  Text,
  Image,
  Box,
  Heading,
  Button
} from 'rebass'
import {
    Label,
    Input,
    Select,
    Textarea,
    Radio,
    Checkbox,
  } from '@rebass/forms'

  function ProfileForm({event, nameInput, ageInput, bioInput, hobbiesInput, maleInput, femaleInput, interestFemaleInput, interestMaleInput}){
    return(
<Box  
  as='form'
  onSubmit={e => event(e)}>
  <Flex mx={-2} mb={3}>
    <Box width={.8} px={2}  py={1} maxWidth={400}>
      <Label htmlFor='name'>Name</Label>
      <Input
        id='name'
        name='name'
        defaultValue='Enter first and last name'
        ref={nameInput}
      />
    </Box>
    <Box width={.3} px={2}  py={1} maxWidth={100}>
      <Label htmlFor='age'>Age</Label>
      <Input
        id='age'
        name='age'
        defaultValue='18+'
        ref={ageInput}
      />
    </Box>
  </Flex>
  <Box mb={3}>
  <Label htmlFor='Bio'>Bio</Label>
  <Textarea
    id='Bio'
    name='Bio'
    maxWidth={485}
    ref={bioInput}
    defaultValue='Enter a short bio about yourself'
  />
  <Box mb={3}>
  <Label htmlFor='Hobbies'>Hobbies and Interests</Label>
  <Textarea
    id='Hobbies'
    name='Hobbies'
    maxWidth={485}
    ref={hobbiesInput}
    defaultValue='Enter a list of hobbies and interests separated by commas'
  />
  {/* <Flex mx={-2} flexWrap='wrap'> */}
  <Text px={2} py={3} fontSize={[ 2, 3, 4 ]}>Select all that apply:</Text>
  <Box>
  <Label>
    <Checkbox
      id='male'
      name='male'
      ref={maleInput}
    />
    Gender: Male
  </Label>
</Box>
<Box>
  <Label>
    <Checkbox
      id='female'
      name='female'
      ref={femaleInput}
    />
    Gender: Female
  </Label>
</Box>
<Box>
  <Label>
    <Checkbox
      id='interestMale'
      name='interestMale'
      ref={interestMaleInput}
    />
    Interested in: Male
  </Label>
</Box>
<Box>
  <Label>
    <Checkbox
      id='interestFemale'
      name='interestFemale'
      ref={interestFemaleInput}
    />
    Interested in: Female
  </Label>
</Box>
</Box>
    <Box px={['185px',1]} py={3} ml='auto'>
      <Button>
        Submit
      </Button>
    </Box>
  {/* </Flex> */}
  </Box>
</Box>
    );
}

export default ProfileForm;