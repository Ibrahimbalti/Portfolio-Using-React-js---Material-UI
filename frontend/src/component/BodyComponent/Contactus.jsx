import React, { useState } from "react";
import { Box } from "@mui/system";
import { bodyStyle } from "./bodyStyle";
import { Container, Grid, Button } from "@mui/material";
import image from "../../images/contactus.jpg";
import { RenderSectionHeading } from "../common/commomComponents";
import { RenderInputText } from "../common/FormComponents";

export const Contactus = () => {

    const [state, setState] = useState({
        data: {
          firstname: "",
          email: "",
          messages: "",
        },
        errors: {},
      });

      const handleOnChange = ({ target }) => {
        const { data, errors } = state;
    
        //setting errors
        target.value.length <= 3
          ? (errors[target.name] = `${target.name} at least have 3 letters`)
          : (errors[target.name] = "");
    
        data[target.name] = target.value;
        setState({ data, errors });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted ,", state.data);
        //api call to psot data
      };
    
  return (
    <Box sx={bodyStyle.section} id='contact us'>
      <Container sx={{ paddingTop: "100px" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={5}>
            <Box display={{ xs: "none", sm: "block" }}>
              <img
                src={image}
                alt="about us"
                style={{ width: "100%", height: "100%", marginBottom: "150px" }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={7}>
            {RenderSectionHeading({
              smallText: "Contact Me",
              heading: "Seem To be Interested",
              Dsc:
                "Got my Portfolio seen, than feel free to contact me for your future projects",
            })}
          
          {/* {CardMedia({label:"label",dsc:"hello sir",Icon:<AcUnitIcon/>})} */}
          <br />
          <br />
          <br />
              <form onSubmit={handleSubmit}>
                <Grid
                  container
                  direction='row'
                  justifyContent='center'
                  alignItems='center'>
                  <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                    {RenderInputText({
                      label: "First Name",
                      name: "firstname",
                      state: state,
                      onChange: handleOnChange,
                    })}
                  </Grid>
                  <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                    {RenderInputText({
                      label: "Email",
                      name: "email",
                      state: state,
                      onChange: handleOnChange,
                    })}
                  </Grid>
                  <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                    {RenderInputText({
                      label: "Messages",
                      name: "messages",
                      state: state,
                      onChange: handleOnChange,
                      multiline: true,
                      rows: 5,
                    })}
                  </Grid>
                  
                  <Grid item xs={12} sm={8} style={{ marginBottom: "16px" }}>
                  <br />
                    <Button
                      variant='outlined'
                      type='submit'
                      fullWidth={true}
                      sx={bodyStyle.submitBtn}
                      >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
