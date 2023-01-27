import React, {useContext} from "react"
import {Link} from "../../node_modules/react-router-dom"
import {FaBars} from "react-icons/fa"
import {Context} from "../Context"
import HeaderCSS from "../styles/Header.module.css"

export default function Header () {

    const {isBarClicked, clickNav} = useContext(Context)


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
                <Link to="/contact" className={HeaderCSS.links}>
                    Contact
                </Link>
            </div>
            <div className={HeaderCSS.bars}>
                <button onClick={clickNav}>
                    <FaBars />
                </button>
            </div>
            {isBarClicked && <div className={HeaderCSS.links__container}>
                {console.log('wtf')}
                <Link to="/projects" className={HeaderCSS.links}>
                    Projects
                </Link>
                <Link to="/about" className={HeaderCSS.links}>
                    About
                </Link>
                <Link to="/contact" className={HeaderCSS.links}>
                    Contact
                </Link>
            </div>}            
        </nav>
    )
}