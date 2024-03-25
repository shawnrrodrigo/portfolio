import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

export default function Intro({ scrollDown }) {
  const textRef = useRef();

  // const scrollDown = () => {
  //   console.log(window.innerHeight);
  //   window.scrollBy({
  //     top: document.body.scrollHeight,
  //     behavior: "smooth",
  //   });
  // };

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Designer", "Photographer", "Writer"],
    });
  }, []);

  return (
    <div className="intro" id="home">
      <div className="wrapper">
        <h2>Hello, I am</h2>
        <h1>Shawn Rodrigo</h1>
        <h3>
          Sometimes a <span ref={textRef}></span>
        </h3>

        <div className="row flex-column flex-md-row mt-5 gap-1 align-items-center">
          <div className="col-12 col-md-auto">
            <a
              href={process.env.PUBLIC_URL +  "/assets/Shawn_Rodrigo_Resume.pdf"}
              download="Shawn_Rodrigo_Resume.pdf"
              className="btn btn-outline-light btn-lg btn-block"
            >
              <FileDownloadOutlinedIcon />
              Download CV
            </a>
          </div>

          <div className="col-12 col-md">
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block"
              style={{
                background: "linear-gradient(to right, #1d2671, #c33764)",
                border: "none",
                color: "white",
              }}
              onClick={scrollDown}
            >
              More about me...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
