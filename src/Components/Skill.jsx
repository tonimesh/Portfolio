import React from 'react'
import bootstrap from "../assets/bootstrap.svg";
import css from "../assets/css.svg";
import Html from "../assets/Html.svg";
import Javascript from "../assets/Javascript.svg"
import git from "../assets/git.svg"
import reactjs from "../assets/reactjs.svg"
import vscode from "../assets/vscode.svg"
import java from "../assets/java.svg"
import "../Components/Skill.css"

function Skill() {
    return (
        <>
            <h1 id="techstack" className='gradient-h py-3 text-center'>Techstack</h1>
            <div className="skill">
                <div className="tech">
                    <img src={Html} />
                    <h4>HTML</h4>
                </div>
                <div className="tech">
                    <img src={css} />
                    <h4>CSS</h4>
                </div>
                <div className="tech">
                    <img src={bootstrap} />
                    <h4>BOOTSTRAP</h4>
                </div>
                <div className="tech">
                    <img src={Javascript} />
                    <h4>JAVASCRIPT</h4>
                </div>
                <div className="tech">
                    <img src={reactjs} />
                    <h4>REACT JS</h4>
                </div>
                <div className="tech">
                    <img src={java} />
                    <h4>JAVA</h4>
                </div>
                <div className="tech">
                    <img src={git} />
                    <h4>GIT</h4>
                </div>
                <div className="tech">
                    <img src={vscode} className='vscode' />
                    <h4>VSCODE</h4>
                </div>
            </div>
        </>
    )
}

export default Skill