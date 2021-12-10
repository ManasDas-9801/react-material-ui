import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { TableBody, TableContainer, Table, TableHead, TableRow, TableCell, } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.red,
    fontSize:'21px',
}));

function FoodList() {
    
    const foodItems = [
        {
            id: 1,
            foodName: "Indian Cusiesene",
            foodImage: "https://b.zmtcdn.com/data/pictures/9/19359199/27ff8b99e6da8e80aa043a7d7daaf2a1_o2_featured_v2.jpg?output-format=webp",
            price: 400,
            desc: "Food is any substance consumed to provide nutritional support for an organism. It can be raw, processed or formulated and is consumed orally by animals for growth, health or pleasure",
            addToCart: true,
        },
        {
            id: 3,
            foodName: "Sahi Paneer",
            foodImage: "https://b.zmtcdn.com/data/pictures/8/18895858/638e245b7c5b0a9470642cb87232104b_o2_featured_v2.jpg?output-format=webp",
            price: 320,
            desc: "Food is any substance consumed to provide nutritional support for an organism. It can be raw, processed or formulated and is consumed orally by animals for growth, health or pleasure",
            addToCart: true,
        },
        {
            id: 2,
            foodName: "Pizza",
            foodImage: "https://b.zmtcdn.com/data/pictures/chains/8/3400208/c9996dd70c88230268cb00d20a92b7cf_o2_featured_v2.jpg",
            price: 600,
            addToCart: true,
            desc: "Food is any substance consumed to provide nutritional support for an organism. It can be raw, processed or formulated and is consumed orally by animals for growth, health or pleasure",
        },
        {
            id: 4,
            foodName: "Puri",
            foodImage: "https://b.zmtcdn.com/data/pictures/1/3401611/e59008596a30776b63b2155fa4739f63_o2_featured_v2.jpg",
            price: 70,
            addToCart: true,
            desc: "Food is any substance consumed to provide nutritional support for an organism. It can be raw, processed or formulated and is consumed orally by animals for growth, health or pleasure",
        },

        {
            id: 8,
            foodName: "Fries",
            foodImage: "https://b.zmtcdn.com/data/pictures/9/19857789/9a4ecbb78c07bbe9d90b19901605297a_o2_featured_v2.jpg",
            desc: "Food is any substance consumed to provide nutritional support for an organism. It can be raw, processed or formulated and is consumed orally by animals for growth, health or pleasure",
            price: 110,
            addToCart: true,
        },
        {
            id: 5,
            foodName: "Chicken",
            foodImage: "https://b.zmtcdn.com/data/pictures/5/3400005/73a81055bb47b7345786737f5c77fec4_o2_featured_v2.jpg?output-format=webp",
            desc: "Food is any substance consumed to provide nutritional support for an organism. It can be raw, processed or formulated and is consumed orally by animals for growth, health or pleasure",
            price: 750,
            addToCart: true,
        },

        {
            id: 6,
            foodName: "Burger",
            foodImage: "https://b.zmtcdn.com/data/pictures/2/19923482/555ff382c1fd873ccafcb37ba66c40b2_o2_featured_v2.jpg?output-format=webp",
            desc: "Food is any substance consumed to provide nutritional support for an organism. It can be raw, processed or formulated and is consumed orally by animals for growth, health or pleasure",
            price: 30,
            addToCart: true,
        },

        {
            id: 7,
            foodName: "Eggroll",
            foodImage: "https://b.zmtcdn.com/data/pictures/6/19252326/6a2dccdca65dff1ab0183899a9bb9de7_o2_featured_v2.jpg?output-format=webp",
            desc: "Food is any substance consumed to provide nutritional support for an organism. It can be raw, processed or formulated and is consumed orally by animals for growth, health or pleasure",
            price: 90,
            addToCart: true,
        },
        {
            id: 12,
            foodName: "Eggroll",
            foodImage: "https://b.zmtcdn.com/data/pictures/6/19252326/6a2dccdca65dff1ab0183899a9bb9de7_o2_featured_v2.jpg?output-format=webp",
            desc: "Food is any substance consumed to provide nutritional support for an organism. It can be raw, processed or formulated and is consumed orally by animals for growth, health or pleasure",
            price: 60,
            addToCart: true,
        },
    ];
    const [foodData] = useState(foodItems);
    const raw = [
        // {
        //     id: 1,
        //     itemName: "Burger",
        //     quan: 1,
        //     itemPrice: 300,
        //     totalPriceList: 300,
        // }
    ];
    // console.log(raw);
    
    const [rawData, setRawData] = useState(raw);
    const AddToList = (itemid) => {
        var singleData = foodItems.filter(function (jsonObject) { return (jsonObject['id'] === itemid); })[0];
        // var list = JSON.stringify(singleData,null,6);
        let copy = [...rawData];
        // let foo = prompt('Number Of Quantity');
        let foo = 1;
        // console.log(foo);
        var totalPrice = singleData.price * foo;
        copy = [...copy, { listid: copy.length + 1, itemName: singleData.foodName, quan: foo, itemPrice: singleData.price, totalPriceList: totalPrice, }];
        setRawData(copy);
        console.log(copy);
        // console.log(raw);
        console.log(rawData);
        var total = 0;
        copy.map((n) => total += n.totalPriceList);
        console.log(total);
       var t = document.getElementById('totalBtn').innerText = 'Total Price To Paid Rs : ' + total;
       console.log(t);
        
        
        
    }

    return (
        <>
            <Box
                sx={{
                    width: "90%",
                    height: "auto",
                    mx: "auto",

                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} sx={{ mt: { xs: -1, sm: 5 } }}>
                        <Grid container spacing={2}>
                            {
                                foodData.map((data) => (
                                    <Grid item xs={12} md={4} sx={{ mb: 3 }} key={data.id}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height="140"
                                                image={data.foodImage}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {data.foodName}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {data.desc}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>

                                                <Button size="small" variant="outlined" onClick={() => AddToList(data.id)}> Rs :{data.price}</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ mt: { xs: 1, md: 5 }, mb: { xs: 8 } }}>
                        <Item>This is Bill section</Item>
                        <TableContainer id="doctorresultTable">
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="right">#</TableCell>
                                        <TableCell align="right">Item Name</TableCell>
                                        <TableCell align="right">Quantity</TableCell>
                                        <TableCell align="right">Price</TableCell>
                                        <TableCell align="right">Total Price</TableCell>
                                    </TableRow>
                                    {
                                        rawData.map((listItem) => (
                                            <TableRow key={listItem.listid}>
                                                <TableCell align="right">{listItem.listid}</TableCell>
                                                <TableCell align="right">{listItem.itemName}</TableCell>
                                                <TableCell align="right">{listItem.quan}</TableCell>
                                                <TableCell align="right">{listItem.itemPrice}</TableCell>
                                                <TableCell align="right" color="error">{listItem.totalPriceList}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableHead>
                                <TableBody>

                                </TableBody>

                            </Table>
                        </TableContainer>
                        <Stack spacing={2} direction="row" sx={{mt:3}}>
                           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                              
                          </Typography>
                        <Button variant="contained" sx={{mt:4}} id="totalBtn">
                          Rs : 0
                        </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default FoodList;

