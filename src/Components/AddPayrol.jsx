

import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const initialValue = {
    name: '',
    //ide: '',
    salary: '',
    designation:''
    
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddPayrol = () => {
    const [user, setUser] = useState(initialValue);
    const { name, designation, salary } = user;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        console.log(e.target.value, e.target.name)
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user)
    }

    const addUserDetails = async() => {
        await addUser(user);
        navigate('/all');
    }

    return (
    <div data-testid ='comp'>
    
    <Container>
            <Typography variant="h4">Add Pay</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)}  name='name' value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Designation</InputLabel>
                <Input onChange={(e) => onValueChange(e)}  name='designation' value={designation}/>
            </FormControl>
            <FormControl>
                <InputLabel>Salary</InputLabel>
                <Input onChange={(e) => onValueChange(e)}  name='salary' value={salary}/>
            </FormControl>
            <FormControl>
                <Button variant= "contained" onClick={() => addUserDetails()}sx={{ backgroundColor: '#a599ea' }}>Add Salary</Button>
            </FormControl>
        </Container>

          </div>
        );
      
      }
    
    
export default AddPayrol  ;