import React, {useEffect, useState} from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getUsers, deleteUser } from '../service/api';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})

const AllUsers = () => {
    const [users, setUsers] = useState([])
    const classes = useStyles();

    useEffect(() => {
        getAllUsers()
    }, [])

 const getAllUsers = async () => {
     const response = await getUsers();
     console.log(response.data);
     setUsers(response.data)
 }
 
 const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
    console.log("deleted")
 }
    return (
        <Table className={classes.table}>
        <TableHead>
            <TableRow className={classes.thead}>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell></TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {users.map((user) => (
                <TableRow className={classes.row} key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.country}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>
                        <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                        <Button color="secondary" variant="contained" onClick={() => deleteUserData(user.id)}>Delete</Button> 
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
    )
}

export default AllUsers
