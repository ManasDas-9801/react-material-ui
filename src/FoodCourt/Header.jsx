import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import SettingIcon from '@mui/icons-material/Settings';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),

        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {


    return (

        <>
            <Box sx={{ flexGrow: 1, mb: 5, display: { xs: 'none', sm: 'block' } }}>
                <AppBar position="fixed" color="error" sx={{mb:5}}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            FOOD Panda
                        </Typography>
                        <Search>
                            <SearchIconWrapper >
                                <SearchIcon sx={{ display: { xs: 'none', sm: 'block' } }} />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            />
                        </Search>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ ml: 2 }}
                        >
                            <MailIcon />
                        </IconButton> 
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ ml: 2 }}
                        >
                            <NotificationsIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ ml: 2 }}
                        >
                            <SettingIcon />
                        </IconButton> 
                        <Avatar
                            color="primary"
                            sx={{ width: 40, height: 40, ml: 2 }}
                            src={'https://mui.com/static/images/avatar/1.jpg'}
                        />
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{ flexGrow: 1, mb: 5, display: { xs: 'block', sm: 'none' } }}>
                <AppBar position="fixed" color="error" sx={{ top: 'auto', bottom: 0 }}>
                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>

                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                        </Typography>
                        <Search>
                            <SearchIconWrapper >
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}

                            />
                        </Search>
                        <Avatar
                            color="primary"
                            sx={{ width: 30, height: 30, ml: 3 }}
                            src={'https://mui.com/static/images/avatar/1.jpg'}
                        />
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}