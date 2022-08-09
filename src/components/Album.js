import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import SingleCard from "./SingleCard";
import Title from "./Title";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://dbnservers.net">
                DBNServers
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const cards = [1, 2, 3, 4, 5];

const myBins = [
    {id: 1, name: 'A1', contents: 'Empty', owner: 'M'},
    {id: 2, name: 'A2', contents: 'Empty', owner: 'M'},
    {id: 3, name: 'A3', contents: 'Empty', owner: 'M'},
    {id: 4, name: 'A4', contents: 'Empty', owner: 'J'},
    {id: 5, name: 'A5', contents: 'Empty', owner: 'J'},
]


const theme = createTheme();

export default function Album() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <CameraIcon sx={{mr: 2}}/>
                    <Typography variant="h6" color="inherit" noWrap>
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Title/>
                <Container sx={{py: 8}} maxWidth="md">
                    <Grid container spacing={4}>
                        {myBins.map((bin) => (
                            <Grid item key={bin.id} xs={12} sm={6} md={4}>
                                <SingleCard data={bin}/>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{bgcolor: 'background.paper', p: 6}} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                </Typography>
                <Copyright/>
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}