import { Box, Typography } from "@mui/material";
import { CustomStyle } from "../header/HeaderStyle";
import { bodyStyle } from "../BodyComponent/bodyStyle";
import { Grid, Avatar } from "@mui/material";
import {  TextField } from "@mui/material";

export const Decorator = ({ label, withIcon, Icon, style }) => {
  return (
    <Box sx={CustomStyle.decorator} style={style}>
      <Typography component="span" sx={CustomStyle.decoratorText}>
        {label}
      </Typography>
      {withIcon ? (
        <Typography component="span" sx={CustomStyle.decoratorArrow}>
          {Icon}
        </Typography>
      ) : null}
    </Box>
  );
};

export const Dividers = ({style}) => {
  return <Typography varaint="body1" sx={bodyStyle.dividers} style={style}></Typography>;
};

export const RenderSectionHeading = ({
  smallText,
  heading,
  alignCenter,
  Dsc,
}) => {
  //Decorator
  //Heading
  //line
  //Description
  return (
    <Box sx={bodyStyle.sectionHeadingCont}>
      {Decorator({
        label: smallText,
        withIcon: false,
        style: alignCenter ? { width: "100px", margin: "10px auto" } : {},
      })}

      <Typography
        variant="h4"
        align={alignCenter ? "center" : "left"}
        sx={bodyStyle.sectionHeading}
      >
        {heading}
      </Typography>
      {Dividers({style: alignCenter ? {  margin: "16px auto" } :{  margin: "16px 0px" } ,})}
      <Typography
        variant="body2"
        component="h6"
        align={alignCenter ? "center" : "left"}
        sx={bodyStyle.sectionDsc}
      >
        {Dsc}
      </Typography>
    </Box>
  );
};

export const CardMedia = ({ label, dsc, Icon }) => {
  return (
    <Grid container>
      <Grid item xs={3} style={bodyStyle.AvatarCont}>
        <Avatar sx={bodyStyle.avator}>{Icon}</Avatar>
      </Grid>
      <Grid item xs={9}>
        <Typography
          variant="body1"
          component="h6"
          
          sx={bodyStyle.MediaText}
        >
          {label}
        </Typography>
        <Typography variant="caption" sx={bodyStyle.MediaText}>
          {dsc}
        </Typography>
      </Grid>
    </Grid>
  );
};


export const RenderinputText=({name,label,onChange,state,multiline,rows})=>{
  const {data}=state
  return (
    <TextField label={label}
     variant="outlined"
      fullWidth={true} 
      name={name} 
      value={data[name]}
       onChange={onChange} 
       multiline={multiline}
        rows={rows}
        sx={{color:'white'}}/> 
  )
}