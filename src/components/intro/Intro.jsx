import { useEffect, useRef } from "react";
import "./intro.scss"
import {init} from 'ityped';
// import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Intro() {
  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current,{
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Designer", "Content Creator"]
    });
  },[]);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img className="image" src="/assets/shawn.png" alt=""></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, there</h2>
          <h1>Shawn Rodrigo</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
          <button>Let's Go</button>
        </div>
        {/* <a href="#portfolio"><KeyboardDoubleArrowDownIcon/></a> */}
      </div>
    </div>
  )
}
