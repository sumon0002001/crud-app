import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
// import database from '../assets/img3.png';
import crm from '../assets/img2.jpeg';


const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        },
        textAlign: 'center',

         
    },
    image: {
        width: '50%',
        height: '50%'
    }
})
const Dashboard = () => {
    const classes = useStyles();
    
    return (
        <Box className={classes.component}>
            <Typography variant="h4">Client Database</Typography>
                 <Box style={{display:"flex"}}>
          {/* <img src= {database} alt= ""  style={{width: "100%"}}/>  */}
    <img src= {crm} alt= ""  style={{width: "100%"}}/> 
        </Box>

        </Box>
   
  
    )
}

export default Dashboard
