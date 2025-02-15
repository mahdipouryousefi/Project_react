import image from "../image/header.jpg";
import { Link } from "react-router-dom";

const Header2 = () => {
  return (
    <>
      {" "}
      <div >
        
        <Link target="_blank" to="/landingآخرین+حراج+سال&">
     
          <img style={{marginTop:'70px'}} className="header2" src={image} />{" "}
        </Link>
      </div>
    </>
  );
};
export default Header2;
