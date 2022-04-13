import Images from "../../images/brandBanner.jpg";
import { Theme } from "../color Patern/Theme";

export const CustomStyle ={
  HeaderWraper: {
    width: "100%",
    minHeight: "90vh",
    height: "auto",
    background: `linear-gradient(to bottom right , #04303140, #00606473),url(${Images})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  HeaderContainer: {
    width: "85%",
    minHeight: "90vh",
    height: "auto",
    display: "flex",
    padding: "20px",
    flexFlow: "column wrap",
    justifyContent: "center",
    color: Theme.colors.base2,
    fontFamily: "roboto",
    
  },
  //...............Navbar....................

  navbar: {
    backgroundColor: "#1e464a",
    color: "#fff",
  },

  toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  navlinks: {
    color: Theme.colors.base2,
  },

  //.........Header....../////
  headerTitle: {
    fontSize: "3rem",
    marginTop:'20px',
    marginBottom:"20px",
    "@media (max-width: 600px)": {
      fontSize: "2.5rem",
     
    }
  },
  headerDsc: {
    fontSize: "2rem",
    "@media (max-width: 600px)": {
      fontSize: "1.5rem",
      marginTop:'10px',
      marginBottom:"10px"
    }
  },

  // .....Decorator.....
  decorator: {
    display: "flex",
    fontWeight: "bolder",
    fontFamily: "roboto",
    fontSize: "16px",
    position: "relative",
    marginTop: "25px",
    "&:before": {
      width: "40px",
      height: "40px",
      backgroundColor: Theme.colors.primary,
      borderRadius: "50%",
      content: '""',
    },
  },

  decoratorText: {
    lineHeight: "40px",
    position: "absolute",
    left: "18px",
  },
  decoratorArrow: {
    lineHeight: "50px",
    position: "absolute",
    left: "95px",
    animationName: "upDown",
    animationDuration: "0.7s",
    animationIterationCount: "infinite",
    ///..................... Create Animation........
    "@keyframes upDown": {
      "0%": {
        transform: "scale(1,1)",
        paddingTop: "0",
      },
      "100%": {
        transform: "scale(1,1)",
        paddingTop: "10px",
      },
    },
  },
};





