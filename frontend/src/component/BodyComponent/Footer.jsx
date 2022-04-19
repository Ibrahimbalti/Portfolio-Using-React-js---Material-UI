import React from 'react'
import { Link } from "react-scroll";
import { Box } from '@mui/system'
import { bodyStyle } from './bodyStyle'
import { IconButton, Typography } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function Footer() {
    var date=new Date()
  return (
    <Box sx={bodyStyle.footerStyle} id="Footer">
      <Link to="Header"
              spy={true} smooth={true} offset={-70} duration={500}>
        <IconButton sx={bodyStyle.IconButton}>
                <ArrowUpwardIcon/>
        </IconButton>
        </Link>
        <Typography variant='body1' component='h4' align="center" color="inherit">
            Developed and Designed with <FavoriteIcon sx={{color:'red'}}/> by Muhammad Ibrahim , All Right Reserved @ {date.getFullYear()}
        </Typography>

    </Box>
  )
}
