import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import {NavLink} from 'react-router-dom';

const useStyle = makeStyles( {
    header: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }
  });

const NavBar = () => {
    const classes = useStyle();

    return (
        <AppBar position="static" className={classes.header} >
            <Toolbar >
                <NavLink className={classes.tabs}  to="/" exact="true">Home </NavLink>
                <NavLink className={classes.tabs} to="all" exact="true" >All Clients</NavLink>
                <NavLink className={classes.tabs} to="add" exact="true" >Add Clients</NavLink>
            </Toolbar>
        </AppBar>
    )
  
}

export default NavBar
