import "./topbar.scss";
// import {Person, Mail} from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="heading">
            SHAWN RODRIGO
          </a>
        </div>
        <div className="right">
          <div className="itemContainer">
            <a href="#home">
              <h3 className="tag">HOME</h3>
            </a>
            <a href="#about">
              <h3 className="tag">ABOUT</h3>
            </a>
            <a href="#work">
              <h3 className="tag">WORK</h3>
            </a>
            <a href="#contact">
              <h3 className="tag">CONTACT</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
