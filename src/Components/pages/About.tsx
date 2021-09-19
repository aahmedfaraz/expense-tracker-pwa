import React from 'react'

const About:React.FC = () => {
    return (
        <div className="about">
            <h1>About the Expense Tracker <strong>PWA</strong></h1>
            <p>Developed by <span><a href="https://github.com/aahmedfaraz" target="_blank" rel="noreferrer">Ahmed Faraz</a></span></p>
            <p>Developed using <span>React</span> and <span>Typescript</span></p>
            <p><span className="version">Version: 2.0.0</span></p>
            <h2>Tech Used</h2>
            <ul>
                <li>React</li>
                <li>Typescript</li>
                <li>Custom CSS</li>
                <li>ServiceWorker to make Offline availability possible</li>
                <li>Firebase Push Notifications</li>
                <li>React Hooks</li>
                <li>Context APIs</li>
                <li>React Router version 6.0.0-beta.2</li>
                <li>Github</li>
                <li>Github Actions</li>
                <li>Netlify Hosting</li>
            </ul>
            <p>Now <span>Installable</span> and You will recieve <span>daily Push Notifications</span></p>
            <small><strong>Note:</strong> Push Notifications are recieved if the app is Installed and InActive(Closed) at the time of Notification</small>
        </div>
    )
}

export default About;