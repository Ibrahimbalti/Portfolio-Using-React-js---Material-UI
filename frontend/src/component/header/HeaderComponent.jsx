import React from "react";
import { Box, Typography } from "@mui/material";
import { CustomStyle } from "./HeaderStyle";
import Navbar from "./Navbar";
export const HeaderComponent = () => {
  return (
    <Box sx={CustomStyle.HeaderWraper} >
      <Navbar/>
        <Box sx={CustomStyle.HeaderContainer}>
          <Typography variant="h2">
            Header components
          </Typography>
        </Box>
    </Box>
  );
};
