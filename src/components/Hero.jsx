import React from "react"
import HeroCSS from "../styles/Hero.module.css"
import qbank from "../images/qbank.png"
import website from "../images/website.png"
import pong from "../images/pong.png"
import {Link} from "../../node_modules/react-router-dom"

export default function Hero() {
    return (
        <div className={HeroCSS.container}>
            <div className={HeroCSS.left}>
                <div className={HeroCSS.left__content}>
                    <h1 className={HeroCSS.title}>HEY THERE, FRIEND</h1>
                    <div className={HeroCSS.subtitle__container}>
                        <h2 className={HeroCSS.subtitle}>I'm Michael. A front-end developer and medical doctor ready to help your business succeed.</h2>
                    </div>
                    <Link to="/projects"><button className={HeroCSS.cta}>MY WORK</button></Link>
                </div>
            </div>
            <div className={HeroCSS.right}>
                <div className={HeroCSS.image__container}>
                    <div className={HeroCSS.image__one__background}>
                        <img src={qbank} alt='qbank image' className={HeroCSS.qbank}/>
                    </div>
                    <div className={HeroCSS.image__two__background}>
                        <img src={website} alt='website image' className={HeroCSS.website}/>
                    </div>
                    <div className={HeroCSS.image__three__background}>
                        <img src={pong} alt='pong image' className={HeroCSS.pong}/>
                    </div>
                </div>
            </div>
        </div>
    )
}