import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import image from '../images/About.jpg'
export const GrideTest = () => {
  return (
      <Container sx={{backgroundColor:"yellow",marginTop:"30px"}}>
    <Grid container spacing={2}>
  <Grid item xs={12} sm={12} md={7}  sx={{backgroundColor:"blue"}}>
    <img src={image} alt="about us" style={{width:"100%",height:"100%"}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={5} sx={{backgroundColor:"red"}}>
    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam totam facilis atque explicabo ipsam assumenda nihil ullam hic quibusdam quis ab laborum maiores modi suscipit incidunt, minima illum vero excepturi asperiores, inventore voluptatibus voluptates! Repellendus error voluptatem consequatur. Consequatur quia corrupti odio molestiae voluptatum veritatis necessitatibus molestias recusandae sed consequuntur repellat, eligendi quidem similique. Error esse sint deserunt assumenda ut nemo similique! Nostrum vel, quaerat architecto ipsum veritatis excepturi eligendi. Repudiandae, corporis eum aspernatur, distinctio labore laborum, beatae quis voluptas reprehenderit odit excepturi consequatur blanditiis et aliquam libero porro. Maxime expedita illo rem odio! Inventore quos, aliquam velit quod mollitia ipsam eius voluptate, quo quam architecto quaerat animi, veritatis dignissimos voluptates dicta? Rerum vero placeat alias porro, amet quibusdam consequatur repellat, harum ratione earum commodi, tempora dolore dicta ut eum enim ducimus odit? Ducimus enim et, repellendus facere unde voluptatibus at sint quaerat ea mollitia, assumenda ab obcaecati? Dolore nisi at sint adipisci, quos praesentium libero quae debitis nemo officia illum eligendi cumque. Amet, tenetur eveniet, quis placeat voluptatem temporibus ab molestiae totam aut voluptas ipsum perspiciatis tempore consectetur accusantium! Corporis eligendi omnis consectetur maxime dignissimos alias in ad quod ea possimus, perspiciatis saepe corrupti magnam minus labore voluptate. Optio aut itaque cum reiciendis expedita maiores odio eaque. Adipisci, totam? Est possimus quam iste totam tenetur saepe neque illum, veritatis unde aspernatur quae officia sapiente dolores magni eos nobis a deserunt minus non? Provident assumenda porro enim mollitia voluptatibus dignissimos corrupti adipisci ex delectus natus ea, aliquam quaerat expedita impedit, molestiae odit fugit illum veniam dolor minima corporis, suscipit accusamus optio quas! Obcaecati vero quisquam tempora numquam dolorum ut cupiditate cumque veniam quos voluptas eius voluptatibus facilis, ea mollitia harum assumenda tempore modi, odit ducimus. Quod labore cupiditate obcaecati repellat molestiae a alias natus, eaque dolores distinctio sunt ducimus? Eius.</Typography>
  </Grid>
  </Grid>
  </Container>
  )
}
