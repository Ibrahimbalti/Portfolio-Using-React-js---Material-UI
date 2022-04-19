import React from "react";
import { Grid, Box, Container, Typography, Button } from "@mui/material";
import { bodyStyle } from "./bodyStyle";
import { RenderSectionHeading } from "../common/commomComponents";
import Image1 from "../../images/5-2.jpg";
import Image2 from "../../images/5-3.jpg";
import Image3 from "../../images/5-4.jpg";
import Image5 from "../../images/5-6.jpg";
import Image6 from "../../images/5-8.jpg";
import Image7 from "../../images/5-9.jpg";
import { styled } from "@mui/material/styles";
import { Theme } from "../color Patern/Theme";
import ScrollAnimation from 'react-animate-on-scroll'

const ImageContainer = styled("div")(({ theme }) => ({
  position: "relative",
}));


const overlayTitle = styled("Typography")(({ theme }) => ({
  fontSize:"2rem",
  marginBottom:"16px",
  
}));

const ImageoverLay = styled("div")(({ theme }) => ({
  position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.base2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column wrap",
    opacity: 1,
    transization:"0.7s"
}));

export const Portfolio = () => {
  const PortfolioData = [
    {
      url: Image1,
      title: "#Portfolio",
      link: "",
    },
    {
      url: Image2,
      title: "#Portfolio",
      link: "",
    },
    {
      url: Image3,
      title: "#Portfolio",
      link: "",
    },
    {
      url: Image5,
      title: "#Portfolio",
      link: "",
    },
    {
      url: Image6,
      title: "#Portfolio",
      link: "",
    },
    {
      url: Image7,
      title: "#Portfolio",
      link: "",
    },
  ];
  return (
    <Box sx={bodyStyle.sectionDark} id="Portfolio">
      <ScrollAnimation animateIn='fadeIn'>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {RenderSectionHeading({
            smallText: "Portfolio",
            heading: "Let's See My Work",
            alignCenter: true,
          })}
        </Grid>
      </Grid>

      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {PortfolioData.map((item, i) => (
            <Grid item xs={6} sm={4} lg={3} key={i}>
              <ImageContainer >
                <img
                  src={item.url}
                  alt={item.title}
                  style={bodyStyle.responsiveImage}
                />
                

                <ImageoverLay >
                  <overlayTitle>{item.title}</overlayTitle>
                  <Button variant="contained">Visit</Button>
                </ImageoverLay>
              </ImageContainer  >

              {/* ..............OverLay........... */}
            </Grid>
          ))}
        </Grid>
      </Container>
      </ScrollAnimation>
    </Box>
  );
};
