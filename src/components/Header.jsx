import React, {useContext} from "react"
import {Link} from "../../node_modules/react-router-dom"
import {FaBars} from "react-icons/fa"
import {Context} from "../Context"
import HeaderCSS from "../styles/Header.css"

export default function Header () {

    const {isBarClicked, clickNav} = useContext(Context)

    function downloadResume() {
        fetch('resume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume.pdf';
                alink.click();
            })
        })
    }

    return (
        <nav className='container'>
            <div className='nav__left'>
                <Link to="*" className="logo">
                    M.D.
                </Link>
            </div>
            <div className="nav__right">
                <Link to="/projects" className="links">
                    Projects
                </Link>
                <Link to="/about" className="links">
                    About
                </Link>
                <div className="links" onClick={downloadResume}>
                    Resume
                </div>
            </div>
            <div className="bars">
                <button onClick={clickNav}>
                    <FaBars />
                </button>
            </div>
            {isBarClicked && <div className="links__container">
                <Link to="/projects" className="links">
                    Projects
                </Link>
                <Link to="/about" className="links">
                    About
                </Link>
                <div className="links" onClick={downloadResume}>
                    Resume
                </div>
            </div>}            
        </nav>
    )
}