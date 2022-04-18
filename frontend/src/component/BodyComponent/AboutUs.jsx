import React from "react";
import { Box } from "@mui/system";
import { bodyStyle } from "./bodyStyle";
import { Container, Grid } from "@mui/material";
import image from "../../images/About.jpg";
import { RenderSectionHeading } from "../common/commomComponents";
import { CardMedia } from "../common/commomComponents";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import GrainIcon from '@mui/icons-material/Grain';


export const AboutUs = () => {
  const CardMediaData = [
    {
      title: "Web development",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, deleniti.",
      Icon: <DashboardIcon />,
    },
    {
      title: "Graphic Designer",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, deleniti.",
      Icon: <GrainIcon />,
    },
    {
      title: "Mobile App",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, deleniti.",
      Icon: <PermDeviceInformationIcon />,
    },
    {
      title: "Marketing",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, deleniti.",
      Icon: <AcUnitIcon />,
    },
  ];
  return (
    <Box sx={bodyStyle.section}  id='about us'>
      <Container sx={{paddingTop:"100px"}}>
        <Grid container spacing={1} >
          <Grid item xs={12} sm={5}>
            <Box display={{ xs: "none", sm: "block" }}>
              <img
                src={image}
                alt="about us"
                style={{ width: "100%", height: "100%",marginBottom:"150px" }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={7}>
            {RenderSectionHeading({
              smallText: "About Me",
              heading: "Hello I'm Muhammad Ibrahim",
              Dsc:
                "A self taught developer who loves to code something that will impact majority of the people in good way !",
            })}

            <br />
            {/* {CardMedia({label:"label",dsc:"hello sir",Icon:<AcUnitIcon/>})} */}
            <Grid container>
              {CardMediaData.map((item, i) => (
                <Grid item xs={12} sm={6} key={i}  sx={{marginTop:"20px"}}>
                  {CardMedia({
                    label: item.title,
                    dsc: item.description,
                    Icon: item.Icon,
                    key: { i },
                  })}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
