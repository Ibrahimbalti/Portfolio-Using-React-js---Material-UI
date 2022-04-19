import React from "react";
import { Link } from "react-scroll";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Button, IconButton } from "@mui/material";
import { CustomStyle } from "./HeaderStyle";
import MenuOpenIcon from "@mui/icons-material/MenuOpen"

export default function Navbar({ navLink, handleDrawerToggle }) {
  return (
    <AppBar position="fixed" sx={CustomStyle.navbar}>
      <Toolbar sx={CustomStyle.toolbar}>
        <Typography variant="h6" component="h6">
          Muhammad Ibrahim
        </Typography>
        <Box display={{ xs: "none", sm: "block" }}>
          <Box>
            {navLink.map((item, i) => (
              <Link to={`${item.id}`} key={i}
              spy={true} smooth={true} offset={-70} duration={500}>
              <Button
                sx={CustomStyle.navlinks}
                
                color="inherit"
              >
                {item.label}
              </Button>
              </Link>
            ))}
          </Box>
        </Box>

        <Box display={{ xs: "block", sm: "none" }}>
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            <MenuOpenIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
