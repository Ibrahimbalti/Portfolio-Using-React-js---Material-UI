import { Fragment } from "react";
import { HeaderComponent } from "./component/header/HeaderComponent";
import { AboutUs } from "./component/BodyComponent/AboutUs";
import { GrideTest } from "./component/GrideTest";

function App() {
  return (
    <Fragment>
      <HeaderComponent />
      <AboutUs />
      {/* <GrideTest /> */}
    </Fragment>

  );
}

export default App;
