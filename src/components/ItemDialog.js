import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Dialog, Divider, IconButton, List, ListItem, ListItemText, Slide, TextField} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import * as React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function ItemDialog({binValue, handleChange, handleClose, open}) {

    return (<Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{position: 'relative'}}>
                <Toolbar onClick={handleClose}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon/>
                    </IconButton>
                    <Typography sx={{ml: 2, flex: 1}} variant="h6" component="div">
                        Details
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleClose}>
                        save
                    </Button>
                </Toolbar>
            </AppBar>
            <List>
                <ListItem>
                    <ListItemText primary="Name"/>
                    <TextField
                        id="name"
                        name="name"
                        variant="outlined"
                        value={binValue.name}
                        onChange={handleChange}
                    />
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemText primary="Contents"/>
                    <TextField
                        id="contents"
                        name="contents"
                        variant="outlined"
                        value={binValue.contents}
                        onChange={handleChange}
                    />
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemText primary="Owner"/>
                    <TextField
                        id="owner"
                        name="owner"
                        variant="outlined"
                        value={binValue.owner}
                        onChange={handleChange}
                    />
                </ListItem>
                <Divider/>
                <ListItem>
                    <img src={"/black-yellow-bin.jpg"} width={"70%"} alt={'box image'}/>
                </ListItem>
            </List>
        </Dialog>)
}