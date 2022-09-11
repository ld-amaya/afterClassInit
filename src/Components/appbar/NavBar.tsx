import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton"
import Burger from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { useAuth0 } from "@auth0/auth0-react";

export const NavBar = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Burger />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>
                    <Button onClick = { () => isAuthenticated ? logout() : loginWithRedirect()}  color = "inherit">
                        {isAuthenticated ? 'Logout' : 'Login' }
                    </Button >
                </Toolbar>
            </AppBar>
        </Box>
    )
}