import Images from "../../images/brandBanner.jpg";
import { Theme } from "../color Patern/Theme";

export const CustomStyle = {
  HeaderWraper: {
    width: "100%",
    minHeight: "90vh",
    height: "auto",
    background: `linear-gradient(to bottom right , #04303140, #00606473),url(${Images})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
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
};
