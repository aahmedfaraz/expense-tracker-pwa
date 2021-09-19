import React from 'react';
import {Link} from 'react-router-dom';

const HeaderComponent:React.FC = () => {
    return (
        <header>
            <h1>Expense Tracker <strong>PWA</strong></h1>
            <a href="https://github.com/aahmedfaraz" target="_blank" rel="noreferrer" className="info">By Ahmed Faraz</a>
            <p>Build using <span>React</span> and <span>Typescript</span></p>
            <div>
                <small><i className="fas fa-check"></i>Installable</small>
                <small><i className="fas fa-check"></i>Offline Availibiliy</small>
                <small><i className="fas fa-check"></i>Push Notification</small>
            </div>
            <ul>
                <Link to="/" style={listStyle}><li>Home</li></Link>
                <Link to="/about" style={listStyle}><li>About</li></Link>
            </ul>
        </header>
    )
}

const listStyle = {
    color: 'white',
    textDecoration: 'none',
}

export default HeaderComponent;