import React, {useState} from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from "@material-ui/core";
import {addUser} from '../service/api';
import { useHistory } from "react-router-dom";



const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const initialValue =  {
    name: '',
    country: '',
    email: '',
    phone: ''
}


const AddUser = () => {
    const [client, setClient] = useState(initialValue)
    const {name, country, email, phone} = client;
    const classes = useStyle()
    const history = useHistory();


    const changeHandler = (e) => {
        setClient({...client,[e.target.name]: e.target.value})
        console.log(client);
    }

    const addUserDetails = async () => {
        await addUser(client)
        history.push('./all')
    
    }

    return (
        <FormGroup className={classes.container} >
             <Typography variant="h4">Add Clients</Typography>
          <FormControl>
            <InputLabel htmlFor="my-input"> Name </InputLabel>
            <Input 
              id="my-input" 
              aria-describedby="my-helper-text"
              onChange= {(e) => changeHandler(e) } 
              name = "name" 
              value = {name}
              />
            
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Country</InputLabel>
            <Input id="my-input"
               aria-describedby="my-helper-text"
               onChange= {(e) => changeHandler(e) } 
               name ="country"
               value ={country}
                />
            
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input 
              id="my-input" 
              aria-describedby="my-helper-text" 
              onChange= {(e) => changeHandler(e) } 
              name = "email"
              value= {email}
              />
            
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Phone Number</InputLabel>
            <Input 
              id="my-input" 
              aria-describedby="my-helper-text"
              onChange= {(e) => changeHandler(e) }  
              name = "phone"
              vaue = {phone}
              />
          </FormControl>
          <Button 
          variant= "contained" 
          color= "primary"
          onClick={addUserDetails}>
          Add Clients
          </Button>
        </FormGroup>
       
    )
}

export default AddUser
