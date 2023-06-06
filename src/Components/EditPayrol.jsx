import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../service/api';

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
        margin-top: 20px
`;

const EditPayrol = () => {
    const [user, setUser] = useState(initialValue);
    const { name, designation, salary } = user;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {

        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <Container data-testid = 'comp'>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} />
            </FormControl>
            <FormControl>
                <InputLabel >Designation</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='designation' value={designation} />
            </FormControl>
            <FormControl>
                <InputLabel >Salary</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='salary' value={salary} />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}sx={{ backgroundColor: '#a599ea' }}>Edit Information</Button>
            </FormControl>
        </Container>
    )
}

export default EditPayrol;