import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Fab, styled, Box, Modal, TextField, Stack, Card, CardContent, CardMedia, CardActions, CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

function Appbar() {

    const StyledFab = styled(Fab)({
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
        border: 1,
    });
    const boxStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 350,
        bgcolor: 'background.paper',
        p: 4,
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const raw = [
        {
            id: 1,
            content: "Home work to do ",
            image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
            status: true,
        },
        {
            id: 2,
            content: "Code to compile ",
            image: "https://mui.com/static/images/cards/paella.jpg",
            status: true,

        },
        {
            id: 3,
            content: "Debugging Time ",
            image: "https://mui.com/static/images/cards/live-from-space.jpg",
            status: false,
        },
    ];

    const [userData, setUserData] = useState("");
    const [rawData, setRawData] = useState(raw);

    const insert = () => {
        let copy = [...rawData];
        copy = [...copy, { id: copy.length + 1, content: userData, status: true }];
        setRawData(copy);
        setUserData("");
    };
    const deleteList = (id) => {
        let filtered = rawData.filter((task) => {
            return task.id !== id;
        });
        setRawData(filtered);
    }
    return (
        <>
            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>

                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    </Typography>
                    <StyledFab color="secondary" aria-label="add" onClick={handleOpen}>
                        <AddIcon />
                    </StyledFab>
                    <IconButton size="large" edge="end" color="inherit" sx={{ mr: 1 }}>
                        <SearchIcon />
                    </IconButton>
                    <Avatar
                        color="primary"
                        sx={{ width: 30, height: 30 }}
                        src={'https://mui.com/static/images/avatar/1.jpg'}
                    />
                </Toolbar>
            </AppBar>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={boxStyle}>
                    <Stack spacing={2} direction="row">
                        <TextField label="To Do List" color="secondary" focused onChange={(e) => setUserData(e.currentTarget.value)} />
                        <Button variant="outlined" startIcon={<SendIcon />}>
                            Add
                        </Button>
                    </Stack>

                </Box>
            </Modal>
            {rawData.map((task) => (
                <Card sx={{ maxWidth: 345, mx: "auto", mt: 4, mb: 3 }} key={task.id}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image={task.image}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Stack spacing={1} direction="row">
                                <Typography gutterBottom variant="h5" component="div">
                                    {task.id} .
                                </Typography>
                                {task.status ? (
                                    <Typography gutterBottom variant="h5" component="div">
                                        Completed
                                    </Typography>
                                ) : (
                                    <Typography gutterBottom variant="h5" component="div">
                                        Yet To Do
                                    </Typography>
                                )}
                            </Stack>
                            <Typography variant="body2" color="text.secondary">
                                {task.content}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions sx={{ mb: 5 }}>
                        <Button size="small" color="error" variant="contained" startIcon={<DeleteIcon />} onClick={() => deleteList(task.id)}>
                            Delete
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </>
    )
}
export default Appbar;