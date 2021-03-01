import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { HomeIcon } from "@material-ui/icons";

const Navbar = () => {
    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <HomeIcon />
                    <Typography variant="h6">Photo Album</Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
