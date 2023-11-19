import React from "react";
import "./Header.css"
import Floater from "./Floater";

function Header({lightState}) {
  return (
    <>
      {/* <div className="d-flex justify-content-between align-items-center header"> */}
      <div className="col-12 header justify-content-center">
        <h1 className="gradient-h my-3 text-center">TonimeshMondal&lt;/&gt;</h1>
        <div className="links m-auto d-flex justify-content-center">
          <a href="#projects" className="under px-2 me-2">Projects</a>
          <a href="#techstack" className="under px-2 me-2">Skills</a>
          <a href="#experience" className="under px-2 me-2">Experience</a>
          <a href="#about" className="under px-2 me-2">About me</a>
          <a href="#download" className="under px-2 me-2">Download Cv</a>
          <Floater 
            lightState={lightState}
          />
        </div>
      </div>

    </>
  );
}

export default Header;
