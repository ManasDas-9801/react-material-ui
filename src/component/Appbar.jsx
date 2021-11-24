import React from 'react';
import {AppBar, Toolbar,Typography,IconButton,Button,Fab,styled } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';

function Appbar()
{

    const StyledFab = styled(Fab)({
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',


    })
    return(
        <>
             <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" sx={{mr:2}}>
                           
                            <MenuIcon/>
                        </IconButton>
                         <Typography variant="h6" component="div" sx={{flexGrow:1}}>
                                  
                            </Typography>
                            <StyledFab color="secondary" aria-label="add">
                                   <AddIcon />
                             </StyledFab>
                        <Button color="inherit" edge="end">
                             Login
                        </Button>
                    </Toolbar>
             </AppBar>

        </>
    )
}
export default Appbar;