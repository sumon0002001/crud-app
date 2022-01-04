import React, {useState, useEffect} from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from "@material-ui/core";
import {getUsers, editUser} from '../service/api';
import { useHistory, useParams } from "react-router-dom";



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


const EditClient = () => {
    const [client, setClient] = useState(initialValue)
    const {name, country, email, phone} = client;
    const {id} = useParams();
    const classes = useStyle()
    const history = useHistory();

    useEffect(() => {
      loadUserDetails();
    }, [])


    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setClient(response.data)
    }


    const changeHandler = (e) => {
        setClient({...client,[e.target.name]: e.target.value})
        console.log(client);
    }

    const editUserDetails = async() => {
        await editUser(id, client)
        history.push('/all')
        console.log("editpage")
    
    }

    return (
        <FormGroup className={classes.container} >
             <Typography variant="h4">Edit Clients</Typography>
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
              value = {phone}
              />
          </FormControl>
          <Button 
          variant= "contained" 
          color= "primary"
          onClick={editUserDetails}>
          EDIT Clients
          </Button>
        </FormGroup>
       
    )
}

export default EditClient;
