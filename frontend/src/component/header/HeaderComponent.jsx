import React,{useState} from "react";
import Typed from 'react-typed'
import { Box, Typography } from "@mui/material";
import { CustomStyle } from "./HeaderStyle";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Decorator } from "../common/commomComponents";
import DrawerComponent from "../BodyComponent/DrawerComponent";
import Navbar from "./Navbar";
export const HeaderComponent = () => {

  const [initailState,setinitialState]=useState(false)
  const handleDrawerToggle=()=>{
    setinitialState(!initailState)
  }

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
    <Box sx={CustomStyle.HeaderWraper} id="Header" >
      <Navbar navLink={navLink}  handleDrawerToggle={handleDrawerToggle}/>
      <DrawerComponent navLink={navLink}  handleDrawerToggle={handleDrawerToggle} initailState={initailState}/>
        <Box sx={CustomStyle.HeaderContainer}>
          <Typography variant="h3" component="h4" sx={CustomStyle.headerTitle}>
            I'm a <span sx={{paddingRight:"5px"}}></span>
            <Typed strings={["UI/UX Designer,","Web developer"]} typeSpeed={30} backSpeed={50} loop/>
          </Typography>
          <Typography variant="h3" component="h4" sx={CustomStyle.headerDsc}>
            I Create Website and Application , <br/>
            Base On Your Needs...
          </Typography>
          {Decorator({
            label:"About Us",
            withIcon:true,
            Icon:<ArrowDownwardIcon/>
          })}
        </Box>
    </Box>
  );
};
