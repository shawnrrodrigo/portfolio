import "./topbar.scss";
// import {Person, Mail} from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#home" className="heading">
            SHAWN RODRIGO
          </a>
        </div>
        <div className="right">
          <div className="itemContainer">
            <a href={process.env.PUBLIC_URL+"#home"}>
              <h3 className="tag">HOME</h3>
            </a>
            <a href={process.env.PUBLIC_URL+"#about"}>
              <h3 className="tag">ABOUT</h3>
            </a>
            <a href={process.env.PUBLIC_URL+"#portfolio"}>
              <h3 className="tag">PORTFOLIO</h3>
            </a>
            <a href={process.env.PUBLIC_URL+"#contact"}>
              <h3 className="tag" style={{paddingRight: '0px'}}>CONTACT</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
