import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Button,IconButton } from "@mui/material";
import { CustomStyle } from "./HeaderStyle";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export default function Navbar() {
  const navLink = [
    {
      label: "About",
      id: "About",
    },
    {
      label: "Portfolio",
      id: "Portfolio",
    },
    {
      label: "Contact",
      id: "Contact",
    },
  ];
  return (
    <AppBar position="fixed" sx={CustomStyle.navbar}>
      <Toolbar sx={CustomStyle.toolbar}>
        <Typography variant="h6" component="h6">
          Muhammad Ibrahim
        </Typography>
        <Box display={{ xs: "none", sm: "block" }}>
          <Box>
            {navLink.map((item, i) => (
              <Button sx={CustomStyle.navlinks} key={i}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Box>

        <Box display={{ xs: "block", sm: "none" }}>
          <IconButton color="inherit" onClick={()=>console.log("Hello sir")}>
            <MenuOpenIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
