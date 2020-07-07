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
  onSubmit={e => event(e)}
  py={3}>
  <Flex mx={-2} mb={3}>
    <Box width={2/3} px={2}>
      <Label htmlFor='name'>Name</Label>
      <Input
        id='name'
        name='name'
        defaultValue='enter first and last name'
        ref={nameInput}
      />
    </Box>
    <Box width={1/3} px={2}>
      <Label htmlFor='location'>Age</Label>
      <Input
        id='age'
        name='age'
        defaultValue='99'
        ref={ageInput}
      />
    </Box>
  </Flex>
  <Flex mx={-2} flexWrap='wrap'>
  <Box>
  <Label htmlFor='Bio'>Bio</Label>
  <Textarea
    id='Bio'
    name='Bio'
    ref={bioInput}
  />
  <Box>
  <Label htmlFor='Hobbies'>Hobbies and Interests</Label>
  <Textarea
    id='Hobbies'
    name='Hobbies'
    ref={hobbiesInput}
  />
  </Box>
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
    Interest in: Male
  </Label>
</Box>
<Box>
  <Label>
    <Checkbox
      id='interestFemale'
      name='interestFemale'
      ref={interestFemaleInput}
    />
    Interest in: Female
  </Label>
</Box>
</Box>
    <Box>
      <Button>
        Beep
      </Button>
    </Box>
  </Flex>
</Box>
    );
}

export default ProfileForm;