import { Fragment } from "react";
import { HeaderComponent } from "./component/header/HeaderComponent";
import { AboutUs } from "./component/BodyComponent/AboutUs";
import { GrideTest } from "./component/GrideTest";
import { Portfolio } from "./component/BodyComponent/Portfolio";
import { Contactus } from "./component/BodyComponent/Contactus";

function App() {
  return (
    <Fragment>
      <HeaderComponent />
      <AboutUs />
      < Portfolio/>
      <Contactus/>
      {/* <GrideTest /> */}
    </Fragment>

  );
}

export default App;
