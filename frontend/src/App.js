import { Fragment } from "react";
import { HeaderComponent } from "./component/header/HeaderComponent";
import { AboutUs } from "./component/BodyComponent/AboutUs";
import { Portfolio } from "./component/BodyComponent/Portfolio";
import { Contactus } from "./component/BodyComponent/Contactus";
import Footer  from './component/BodyComponent/Footer'

function App() {
  return (
    <Fragment>
      <HeaderComponent />
      <AboutUs />
      < Portfolio/>
      <Contactus/>
      <Footer />
    </Fragment>

  );
}

export default App;
