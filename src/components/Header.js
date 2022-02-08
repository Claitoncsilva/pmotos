import React from 'react';

import { 
  makeStyles,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import Image from 'next/image';

import top from '../../public/images/top-withOutLogo.jpg';
import logo from '../../public/images/logo-template-white.png';

const useStyles = makeStyles((theme) => ({
  root: {
  flexGrow: 1,
  },
  menuButton: {
  marginRight: theme.spacing(2),
  },
 
}));

 
const Header = () => {
    const classes = useStyles();
    
    return(
        <>     
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar variant="dense">
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Image src={logo} alt="logo" height="40" width="170" />
              </Toolbar>
            </AppBar>
          </div>     
       
           <Grid container spacing={2} >
              <Grid item  xs={4} sm={6} md={12}>                  
                  <Image src={top} alt="Top" height="410" width="1350" />                                 
              </Grid>           
            </Grid>  
                  
        </>
    )
}

export default Header














