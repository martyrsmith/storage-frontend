import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useState} from "react";
import {Avatar, Card, CardActionArea} from "@mui/material";
import ItemDialog from "./ItemDialog";
import Box from "@mui/material/Box";

function color(name) {
    console.log(name)
    switch (name) {
        case 'M':
            return ('#336600')
        case 'J':
            return ('#cc33ff')
        case 'T':
            return ('#ff9933')
        case 'F':
            return ('#ff99ff')
        default:
            return ('')
    }

}

export default function SingleCard(props) {


    const [open, setOpen] = React.useState(false);

    const [binValue, setBinValue] = useState({
        name: props.data.name,
        contents: props.data.contents,
        owner: props.data.owner,
        color: color(props.data.owner),
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setBinValue((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Card
                sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
            >
                <Box sx={{alignSelf: 'flex-end', padding: 2}}>
                    <Avatar sx={{bgcolor: binValue.color}}>{binValue.owner}</Avatar>
                </Box>

                <CardActionArea onClick={handleClickOpen}>
                    <CardMedia
                        component="img"
                        sx={{
                            // 16:9
                            pt: '15.25%',
                        }}
                        image="/black-yellow-bin.jpg"
                        alt="random"
                    />
                    <CardContent sx={{flexGrow: 1}}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {binValue.name}
                        </Typography>
                        <Typography>
                            {binValue.contents}
                        </Typography>

                    </CardContent>
                    {/*<CardActions>*/}
                    {/*    <Button size="small" onClick={handleClickOpen}>View</Button>*/}
                    {/*    <Button size="small">Edit</Button>*/}
                    {/*</CardActions>*/}
                </CardActionArea>
            </Card>
            <ItemDialog
                binValue={binValue}
                setBinValue={setBinValue}
                handleChange={handleChange}
                open={open}
                handleClose={handleClose}
            />
        </div>
    )
}