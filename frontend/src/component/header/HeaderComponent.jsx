import React from "react";
import { Box, Typography } from "@mui/material";
import { CustomStyle } from "./HeaderStyle";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Navbar from "./Navbar";
export const HeaderComponent = () => {
  return (
    <Box sx={CustomStyle.HeaderWraper} >
      <Navbar/>
        <Box sx={CustomStyle.HeaderContainer}>
          <Typography variant="h3" component="h4" sx={CustomStyle.headerTitle}>
            I'm a UI/UX Designer,|
          </Typography>
          <Typography variant="h3" component="h4" sx={CustomStyle.headerDsc}>
            I Create Website and Application , Base On Your Needs...
          </Typography>
          <Box sx={CustomStyle.decorator}>
            <Typography variant="span" sx={CustomStyle.decoratorText}>
              About us
            </Typography>
            <Typography variant="span" sx={CustomStyle.decoratorArrow}>
              <ArrowDownwardIcon/>
            </Typography>
          </Box>
        </Box>
    </Box>
  );
};
