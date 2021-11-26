import React, { useState } from 'react';
import { Grid, Typography, IconButton, TableBody, TableContainer, Table, TableHead, TableRow, TableCell, Button, Box, Stack, Card, CardContent, CardMedia, CardActions, CardActionArea } from '@mui/material';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Food = () => {
    const foodItems = [
        {
            id: 1,
            foodName: "Indian Cusiesene",
            foodImage: "https://b.zmtcdn.com/data/pictures/9/19359199/27ff8b99e6da8e80aa043a7d7daaf2a1_o2_featured_v2.jpg?output-format=webp",
            price: 40,
            desc: "Food is any substance consumed to provide nutritional support for an organism. It can be raw, processed or formulated and is consumed orally by animals for growth, health or pleasure",
            addToCart: true,
        },
        {
            id: 3,
            foodName: "Sahi Paneer",
            foodImage: "https://b.zmtcdn.com/data/pictures/8/18895858/638e245b7c5b0a9470642cb87232104b_o2_featured_v2.jpg?output-format=webp",
            price: 40,
            desc: "Food is any substance consumed to provide nutritional support for an organism. It can be raw, processed or formulated and is consumed orally by animals for growth, health or pleasure",
            addToCart: true,
        },
        {
            id: 2,
            foodName: "Pizza",
            foodImage: "https://b.zmtcdn.com/data/pictures/chains/8/3400208/c9996dd70c88230268cb00d20a92b7cf_o2_featured_v2.jpg",
            price: 40,
            addToCart: true,
            desc: "Food is any substance consumed to provide nutritional support for an organism. It can be raw, processed or formulated and is consumed orally by animals for growth, health or pleasure",
        },
        {
            id: 4,
            foodName: "Puri",
            foodImage: "https://b.zmtcdn.com/data/pictures/1/3401611/e59008596a30776b63b2155fa4739f63_o2_featured_v2.jpg",
            price: 40,
            addToCart: true,
            desc: "Food is any substance consumed to provide nutritional support for an organism. It can be raw, processed or formulated and is consumed orally by animals for growth, health or pleasure",
        },

        {
            id: 8,
            foodName: "Fries",
            foodImage: "https://b.zmtcdn.com/data/pictures/9/19857789/9a4ecbb78c07bbe9d90b19901605297a_o2_featured_v2.jpg",
            desc: "Food is any substance consumed to provide nutritional support for an organism. It can be raw, processed or formulated and is consumed orally by animals for growth, health or pleasure",
            price: 40,
            addToCart: true,
        },
        {
            id: 5,
            foodName: "Chicken",
            foodImage: "https://b.zmtcdn.com/data/pictures/5/3400005/73a81055bb47b7345786737f5c77fec4_o2_featured_v2.jpg?output-format=webp",
            desc: "Food is any substance consumed to provide nutritional support for an organism. It can be raw, processed or formulated and is consumed orally by animals for growth, health or pleasure",
            price: 40,
            addToCart: true,
        },

        {
            id: 6,
            foodName: "Burger",
            foodImage: "https://b.zmtcdn.com/data/pictures/2/19923482/555ff382c1fd873ccafcb37ba66c40b2_o2_featured_v2.jpg?output-format=webp",
            desc: "Food is any substance consumed to provide nutritional support for an organism. It can be raw, processed or formulated and is consumed orally by animals for growth, health or pleasure",
            price: 40,
            addToCart: true,
        },

        {
            id: 7,
            foodName: "Eggroll",
            foodImage: "https://b.zmtcdn.com/data/pictures/6/19252326/6a2dccdca65dff1ab0183899a9bb9de7_o2_featured_v2.jpg?output-format=webp",
            desc: "Food is any substance consumed to provide nutritional support for an organism. It can be raw, processed or formulated and is consumed orally by animals for growth, health or pleasure",
            price: 40,
            addToCart: true,
        },
        {
            id: 8,
            foodName: "Eggroll",
            foodImage: "https://b.zmtcdn.com/data/pictures/6/19252326/6a2dccdca65dff1ab0183899a9bb9de7_o2_featured_v2.jpg?output-format=webp",
            desc: "Food is any substance consumed to provide nutritional support for an organism. It can be raw, processed or formulated and is consumed orally by animals for growth, health or pleasure",
            price: 40,
            addToCart: true,
        },




    ];
    const [foodData] = useState(foodItems);

    const AddToCart = (e_name) => {
        alert(e_name + " Added to Cart ");

    }
    return (
        <>
            <Box sx={{ flexGrow: 1, ml: { xs: 1, sm: 3 } }}>
                <Grid container spacing={3}>

                    {
                        foodData.map((data) => (
                            <Grid item columns={{ xs: 12, sm: 9, md: 9 }}  >
                                <Box sx={{ flexGrow: 1 }} >
                                    <Grid container spacing={{ xs: 2, md: 3 }}>
                                        <Grid item columns={{ xs: 4, sm: 12, md: 6 }} >
                                            <Card sx={{ maxWidth: 345, mt: { xs: -1, sm: 5, height: 420 }, mb: 3 }} key={data.id} >
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height="200"
                                                        image={data.foodImage}
                                                        alt="Food Item"
                                                    />
                                                    <CardContent>
                                                        <Stack spacing={1} direction="row">
                                                            <Typography gutterBottom variant="h6" component="div" sx={{ flexGrow: 1 }} >
                                                                {data.foodName}
                                                            </Typography>
                                                            <IconButton size="large"
                                                                edge="end"
                                                                color="success"
                                                                aria-label="open drawer"
                                                                sx={{ mr: 2 }}>
                                                                <AddShoppingCartIcon onClick={() => AddToCart(data.foodName)} />
                                                            </IconButton>


                                                        </Stack>

                                                    </CardContent>
                                                    <Typography  variant="p" component="div" sx={{ flexGrow: 1, mb: 2,px:1}} >
                                                        {data.desc}
                                                    </Typography>
                                                </CardActionArea>
                                                <CardActions sx={{ mb: 5 }}>
                                                <Button variant="contained" color="primary" disableElevation>
                                                           {data.price}
                                                        </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        ))
                    }
                    <Grid item xs sx={{ mb: 5, mt: 1 }}>
                        <Card sx={{ maxWidth: { xs: 425, sm: 450 }, mt: 4, mb: 5, mr: 1 }}>
                            <Typography variant="h4" sx={{ textAlign: "center" }}>
                                Order List
                            </Typography>
                            <TableContainer>
                                <Table aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>#</TableCell>
                                            <TableCell>Item Name</TableCell>
                                            <TableCell>Quantity</TableCell>
                                            <TableCell>Price</TableCell>
                                            <TableCell>Total Price</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        <TableCell>1.</TableCell>
                                        <TableCell align="right">Burger</TableCell>
                                        <TableCell align="right">3</TableCell>
                                        <TableCell align="right">50</TableCell>
                                        <TableCell align="right">150</TableCell>


                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}
export default Food;
