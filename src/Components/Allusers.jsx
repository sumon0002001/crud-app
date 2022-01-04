import React, {useEffect, useState} from 'react'
import { getUsers } from '../Service/api';
import {Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  table: {
    width: '90%',
    margin: '50px 0 0 50px'
},
thead: {
    '& > *': {
        fontSize: 20,
        background: '#1fdb8a',
        color: '#FFFFFF'
    }
},
row: {
    '& > *': {
        fontSize: 18
    }
}
})


const Allusers = () => {
  const [users, setUsers] = useState([]);
  const classes = useStyle();

  useEffect(() => {
  
    getAllUsers()
  }, [])

  const getAllUsers = async() => {
   const response = await getUsers();
    setUsers(response.data)
  }


    return (
      <Table className={classes.table} >
      <TableHead>
          <TableRow className={classes.thead} >
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
                  {/* <TableCell>
                      <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                      <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button> 
                  </TableCell> */}
              </TableRow>
          ))}
      </TableBody>
  </Table>
    )
}

export default Allusers
