import { Theme } from "../color Patern/Theme";

export const bodyStyle = {
  //............About Section............
  section: {
    backgroundColor: Theme.colors.base1,
  },
  dividers: {
    width: "65px",
    height: "4px",
    backgroundColor: Theme.colors.primary,
    marginTop: "16px",
    marginBottom: "16px",
  },
  
  sectionHeadingCont: {
    color: Theme.colors.base2,
  },

  sectionHeading: {
    color: Theme.colors.base2,
    marginTop: "16px",
    marginBottom: "16px",
  },

  AvatarCont: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  avator: {
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.base2,
  },

  MediaText: {
    color: Theme.colors.base2,
  },

  ///............Portfolio..............
  sectionDark: {
    backgroundColor: Theme.colors.primary1,
    paddingTop: "100px",
    paddingBottom: "8px",
  },

  responsiveImage: {
    width: "100%",
    height: "100%",
  },

  ImageContainer: {
    position: "relative",
    '&:hover #ImageoverLay':  {
       backgroundColor:'red',
        opacity:"1"
      }
  },

  ImageoverLay: {
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
  },

  overlayTitle:{
      fontSize:"2rem",
      marginBottom:"16px",
      "@media (max-width: 600px)": {
        fontSize: "1.5rem",  
       
      },
  },

  submitBtn:{
      backgroundColor:Theme.colors.primary,
      color:Theme.colors.base2,
      "&:hover":{
        backgroundColor:Theme.colors.primary1
      }
  },

  footerStyle:{
    position:'relative',
    backgroundColor:Theme.colors.primary1,
    color:Theme.colors.base2,
    padding:"20px"
  },

  IconButton:{
      position:'absolute',
      right:19,
      top:-25,
      backgroundColor:Theme.colors.primary,
      color:Theme.colors.base2
  },
  drawer:{
    width:'250px',
    height:"100vh"
  },
  drawerWraper:{
    width:'250px',
    height:"100vh",
    backgroundColor:Theme.colors.primary1
  },
  listItem:{
    color:Theme.colors.base2
  }
};
