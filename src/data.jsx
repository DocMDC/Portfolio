import qbank from "./images/qbank.png"
import website from "./images/website.png"
import pong from "./images/pong.png"

const dataArray = [
    {
        id: 0,
        projectNumber: "#1",
        img: qbank,
        color: '#f38ba3',
        title: 'Question Bank',
        content: [<ul key='0'>
            <li>Written in html, css, and javascript without libraries or frameworks</li>
            <li>Used the <a href='https://orientation.nbme.org/Launch/USMLE/STPF1' target='_blank'> NBME practice exam</a> as a template to replicate the design and functionality of their product</li>
            <li>Features include:</li>
            <p>-Score tracking</p>
            <p>-Interactive side navbar</p>
            <p>-Calculator</p>
            <p>-Ability to save notes for each question</p>
            <p>-Time tracking</p>
            <p>-Option to mark/flag questions when unsure regarding the answer</p>
            <p>-Immediate feedback regarding correctness</p>
            <p>-Detailed explanations for each question choice</p>
            <p>-Dark mode</p>
            <p>-Text zooming for accessibility</p>
            <li>Check out the application <a href="" target="_blank">here</a></li>
            <li>Find the code <a href="" target="_blank">here</a></li>
        </ul>]
    },
    {
        id: 1,
        projectNumber: "#2",
        img: website,
        color: '#11a85b',
        title: 'Photography Website',
        content: [
            <ul key='1'>
                <li>Written in html, css, and React</li>
                <li>Features to highlight from React include:</li>
                <p>-React router</p>
                <p>-React context</p>
                <p>-Component based organization</p>
                <p>-Utilization of hooks such as useState and useEffect</p>
                <p>-The use of a complex form driven by state</p>
                <p>-Dynamic mapping of content</p>
                <li>Check out the application <a href="" target="_blank">here</a></li>
            <li>Find the code <a href="" target="_blank">here</a></li>
            </ul>
        ]
    },
    {
        id: 2,
        projectNumber: "#3",
        img: pong,
        color: '#fcbb28',
        title: 'Pong Game',
        content: [
            <ul key='2'>
                <li>Written in html, css, and javascript</li>
                <li>Highlights from this project include:</li>
                <p>-Utilization of the javascript canvas</p>
                <p>-Object oriented programming</p>
                <p>-Use of classes</p>
                <p>-Dynamic score tracking</p>
                <li>Check out the application <a href="" target="_blank">here</a></li>
            <li>Find the code <a href="" target="_blank">here</a></li>
            </ul>
        ]
    }
]

export default dataArray