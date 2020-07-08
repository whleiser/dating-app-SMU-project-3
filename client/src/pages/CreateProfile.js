import React, {useRef} from "react";
import ProfileForm from '../components/profileform';
import API from "../utils/API";
import {
    Heading,
    Flex,
    Box
  } from 'rebass';
  import {
    Label,
    Input,
    Select,
    Textarea,
    Radio,
    Checkbox,
  } from '@rebass/forms';
  import { useHistory } from "react-router-dom";


function CreateProfile(){
    let history = useHistory();
    const emailInput = useRef("");
    const passwordInput = useRef("");
    const nameInput = useRef("");
    const ageInput = useRef("");
    const bioInput = useRef("");
    const hobbiesInput = useRef("");
    const maleInput = useRef(false);
    const femaleInput = useRef(false);
    const interestFemaleInput = useRef(false);
    const interestMaleInput = useRef(false);
    function signUp (event) {
        console.log(emailInput.current.value);
        console.log(passwordInput.current.value);
        console.log(nameInput.current.value);
        console.log(ageInput.current.value);
        console.log(bioInput.current.value);
        console.log(hobbiesInput.current.value);
        console.log(maleInput.current.checked);
        console.log(femaleInput.current.checked);
        console.log(interestMaleInput.current.checked);
        console.log(interestFemaleInput.current.checked);

        API.signUp({email: emailInput.current.value, 
                    password: passwordInput.current.value, 
                    name: nameInput.current.value, 
                    age: ageInput.current.value, 
                    bio: bioInput.current.value, 
                    hobbies: hobbiesInput.current.value, 
                    male: maleInput.current.checked, 
                    female: femaleInput.current.checked, 
                    interestFemale: interestFemaleInput.current.checked, 
                    interestMale: interestMaleInput.current.checked
                    })
        .then(data => history.push("/login"))
        event.preventDefault()  
    }
    return (
        <div>
        <Heading
  fontSize={[ 5, 6, 7 ]}
  color='primary'>
  Create LinkUp Profile
</Heading>
<Box>
  <Flex mx={-2} mb={3}>
    <Box width={.6} px={2} maxWidth={310}>
      <Label htmlFor='email'>Email</Label>
      <Input
        id='email'
        name='email'
        type='email'
        defaultValue='Enter email address'
        ref = {emailInput}
      />
    </Box>
    <Box width={.4} px={2} maxWidth={190}>
      <Label htmlFor='password'>Password</Label>
      <Input type='password'
        id='password'
        name='password'
        defaultValue='password'
        ref = {passwordInput}
      />
    </Box>
  </Flex>
  </Box>
        <ProfileForm event={signUp} 
                    nameInput={nameInput}  
                    ageInput={ageInput} 
                    bioInput={bioInput}
                    hobbiesInput={hobbiesInput}
                    maleInput={maleInput}
                    femaleInput={femaleInput}
                    interestFemaleInput={interestFemaleInput}
                    interestMaleInput={interestMaleInput}
                    ></ProfileForm>
        </div>
    );
}

export default CreateProfile;