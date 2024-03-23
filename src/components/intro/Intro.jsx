import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    console.log(textRef);
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Designer", "Photographer", "Writer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="wrapper">
        <h2>Hello, I am</h2>
        <h1>Shawn Rodrigo</h1>
        <h3>
          Sometimes a <span ref={textRef}></span>
        </h3>

        <div className="d-flex gap-2 mt-5">
          <a href="#about">
            <button type="button" class="btn btn-primary mr-2">
              More about me
            </button>
          </a>
          <button type="button" class="btn btn-outline-light">
            <FileDownloadOutlinedIcon />
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
