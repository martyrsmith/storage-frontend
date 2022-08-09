import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import * as React from "react";

export default function Title(){
    return (
    <Box
        sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
        }}
    >
        <Container maxWidth="sm">
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                Storage Bins
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Garage organization site.
            </Typography>
            <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
            >
                {/*<Button variant="contained">Main call to action</Button>*/}
                {/*<Button variant="outlined">Secondary action</Button>*/}
            </Stack>
        </Container>
    </Box>
    )
}