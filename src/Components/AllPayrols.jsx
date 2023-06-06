import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { getUsers, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`

    & > th {
        font-size: 20px;
        background: #000000;
        color: #a599ea;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllPayrols = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }
    
    return(
        
        <StyledTable data-testid = 'comp'>
            <TableHead>
                <THead>
                    <TableCell>Designation</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Salary</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map(user =>
                <TRow key="{user.id}">
                    <TableCell>{user.designation}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.salary}</TableCell>
                    <TableCell>
                        <Button variant= 'contained' style={{marginRight: 10}} component={Link} to ={`/edit/${user._id}`}>Edit </Button>
                        <Button variant= "contained" color= "secondary" onClick={()=> deleteUserData(user._id)}>Delete  </Button>
                    </TableCell>
                </TRow>
                )}
            </TableBody>
        </StyledTable>
    )

}

export default AllPayrols;