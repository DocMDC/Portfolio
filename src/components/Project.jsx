import React, {useState} from "react"
import ProjectCSS from "../styles/Project.module.css"
import qbank from "../images/qbank.png"
import website from "../images/website.png"
import pong from "../images/pong.png"
import {FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight} from "react-icons/fa"
import dataArray from "../data"

export default function Project() {

    const [count, setCount] = useState(0)

    function increment() {
        setCount(prevCount => {
            if (prevCount >= 2) {
                return 0
            } else {
                return prevCount + 1
            }
        })
    }

    function decrement() {
        setCount(prevCount => {
            if (prevCount <= 0) {
                return 2
            } else {
                return prevCount - 1
            }
        })
    }

    let background
    let border

    if (count === 0) {
        background = {
            backgroundColor: '#f38ba3'
        }
        border = {
            borderBottom: '3px solid #f38ba3'
        }
    } else if (count === 1) {
        background = {
            backgroundColor: '#11a85b'
        }
        border = {
            borderBottom: '3px solid #11a85b'
        }
    } else {
        background = {
            backgroundColor: '#fcbb28'
        }
        border = {
            borderBottom: '3px solid #fcbb28'
        }
    }

    return (
        <div className={ProjectCSS.container}>
            <div className={ProjectCSS.left}>
                <h1 style={border}>{dataArray[count].title}</h1>
                <div className={ProjectCSS.description}>
                    {dataArray[count].content}
                    <div className={ProjectCSS.project__number}>
                        <p>{dataArray[count].projectNumber}</p>
                    </div>
                    <div className={ProjectCSS.punch__container__left}>
                        <div className={ProjectCSS.punch__left}></div>
                        <div className={ProjectCSS.punch__left}></div>
                        <div className={ProjectCSS.punch__left}></div>
                    </div>
                </div>
            </div>
            <div className={ProjectCSS.right} style={background}>
                <img src={dataArray[count].img} alt={dataArray[count].title} className={ProjectCSS.qbank}/>
                <div className={ProjectCSS.punch__container__right}>
                    <div className={ProjectCSS.punch__right}></div>
                    <div className={ProjectCSS.punch__right}></div>
                    <div className={ProjectCSS.punch__right}></div>
                </div>
            </div>
            <div className={ProjectCSS.arrow__left} onClick={decrement}>
                <FaRegArrowAltCircleLeft/>
            </div>
            <div className={ProjectCSS.arrow__right} onClick={increment}>
                <FaRegArrowAltCircleRight/>
            </div>
        </div>
    )
}