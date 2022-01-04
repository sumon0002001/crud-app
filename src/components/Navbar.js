import React from 'react';
import { AppBar, Toolbar, makeStyles} from '@material-ui/core';
import { NavLink } from "react-router-dom";

const styles = makeStyles({
    header: {
        background: '#fcba03'
    }, 
    tab: {
       color :'#FFFFFF',
       marginRight: 20,
       textDecoration: 'none',
       fontSize: 20

    }
})
const Navbar = () => {
    const classes = styles();

  return (
    <AppBar position="static" className={classes.header}>
    <Toolbar variant="dense">
    <NavLink to="/" className={classes.tab} >
      Dashboard
    </NavLink>
    <NavLink to="/all" className={classes.tab}>
      AllClients
    </NavLink>
    <NavLink to="/add" className={classes.tab} >
      AddClient
    </NavLink>
  </Toolbar>
</AppBar>
        
    )
}

export default Navbar
