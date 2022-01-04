import React from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, Typography } from "@material-ui/core";

const Addusers = () => {
    return (
        <FormGroup  >
             <Typography variant="h4">Add Clients</Typography>
          <FormControl>
            <InputLabel htmlFor="my-input"> Name </InputLabel>
            <Input 
           
              />
            
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Country</InputLabel>
            <Input 
                />
            
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input 
             
              />
            
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Phone Number</InputLabel>
            <Input 
             
              />
          </FormControl>
          <Button 
          >
          Add Clients
          </Button>
        </FormGroup>
    )
}

export default Addusers
