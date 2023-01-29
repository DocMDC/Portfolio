import React from "react"
import AboutMeCSS from "../styles/AboutMe.module.css"
import me from "../images/me.jpg"
import {FaLinkedin, FaGithub} from "react-icons/fa"

export default function AboutMe() {
    
    return (
        <div className={AboutMeCSS.container}>
            <div className={AboutMeCSS.left}>
                <img src={me} alt="image of me" className={AboutMeCSS.my__image}/>
            </div>
            <div className={AboutMeCSS.right}>
                <h1 className={AboutMeCSS.title}>A LITTLE ABOUT ME...</h1>
                <h2>As you can see from this website logo, my name is <u>M</u>ichael <u>D</u>ouglas Christensen. However, I am also an M.D. (aka medical doctor) so the logo kills two birds with one stone.</h2>
                <br/>
                <h2>I am happily married with 3 kiddos and enjoy music, cooking, lifting weights, medicine, business, coding, and traveling.</h2>
                <br/>
                <h2>Over the past few years (and especially the past few months), I have developed a passion for front-end development. I enjoy how creative and complex it is, and that with these newly developed skills I have a greater ability to solve problems.</h2>
                <br/>
                <h2>I know I have a lot to learn when it comes to coding, but I have come a long way in a short period of time and am confident that I can be a valuable asset as a front-end developer for you.</h2>
                <br/>
                <h2>If you'd like to learn more about me you are welcome to checkout my resume, look at my social media accounts, or get in touch directly (my contact information is on my resume).</h2>
                <br/>
                <div className={AboutMeCSS.social__container}>
                    <a href="https://www.linkedin.com/in/michael-christensen-659935124/" target="_blank" className={AboutMeCSS.social__icons}><FaLinkedin /></a>
                    <a href="https://github.com/DocMDC/" target="_blank" className={AboutMeCSS.social__icons}><FaGithub /></a>
                </div>
            </div>
        </div>
    )
}

