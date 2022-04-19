import React from 'react'
import { Drawer,Box, List, ListItem, ListItemText } from '@mui/material'
import { bodyStyle } from './bodyStyle'


export default function DrawerComponent({navLink,initailState,handleDrawerToggle}) {
  return (
   <Drawer anchor='left' open={initailState} onClose={handleDrawerToggle} sx={bodyStyle.drawer} >
       <Box sx={bodyStyle.drawerWraper}>
            <List sx={{paddingTop:"30px"}}>
                {navLink.map((item,i)=>(
                    <ListItem key={i} sx={bodyStyle.listItem}>
                        <ListItemText>{item.label}</ListItemText>
                    </ListItem>
                ))}
            </List>
       </Box>
   </Drawer>
  )
}
