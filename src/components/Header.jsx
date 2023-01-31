import React, {useContext} from "react"
import {Link} from "../../node_modules/react-router-dom"
import {FaBars} from "react-icons/fa"
import {Context} from "../Context"
import HeaderCSS from "../styles/Header.module.css"

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
        <nav className={HeaderCSS.container}>
            <div className={HeaderCSS.nav__left}>
                <Link to="*" className={HeaderCSS.logo}>
                    M.D.
                </Link>
            </div>
            <div className={HeaderCSS.nav__right}>
                <Link to="/projects" className={HeaderCSS.links}>
                    Projects
                </Link>
                <Link to="/about" className={HeaderCSS.links}>
                    About
                </Link>
                <div className={HeaderCSS.links} onClick={downloadResume}>
                    Resume
                </div>
            </div>
            <div className={HeaderCSS.bars}>
                <button onClick={clickNav}>
                    <FaBars />
                </button>
            </div>
            {isBarClicked && <div className={HeaderCSS.links__container}>
                <Link to="/projects" className={HeaderCSS.links}>
                    Projects
                </Link>
                <Link to="/about" className={HeaderCSS.links}>
                    About
                </Link>
                <div className={HeaderCSS.links} onClick={downloadResume}>
                    Resume
                </div>
            </div>}            
        </nav>
    )
}