import Navbare from "../navbar/navbar";
import Bootomnav from "./bottomnav.js/bottomnav";
import Circle from "./circle/circle";
import Header from "./header/header";
import Carousel from "./imagebottom/Caousel";
import Bottimage from "./bottomimage/bottimage";
import Autoimage from "./autoimage/autoimage";
import Fixphone from "./fixphone";
import InputInspect from "./inputinspect/inputinspect";

const All = () => {
  return (
    <div>
      <Header />
      <Navbare />
      <Bootomnav />
      <Circle />
      <Carousel />
      {/* <Bottimage /> */}
      <Autoimage />
      <InputInspect/>
      <Fixphone />
    </div>
  );
};
export default All;
