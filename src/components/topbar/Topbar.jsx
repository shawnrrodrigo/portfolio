import "./topbar.scss";
// import {Person, Mail} from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="heading">
            Shawn Rodrigo
          </a>
        </div>
        <div className="right">
          <div className="itemContainer">
            <a href="#home">
              <h3 className="tag">Home</h3>
            </a>
            <a href="#about">
              <h3 className="tag">About</h3>
            </a>
            <a href="#work">
              <h3 className="tag">Work</h3>
            </a>
            <a href="#contact">
              <h3 className="tag">Contact</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
