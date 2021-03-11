import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hello friends,</p>
                    <p>I'm Mengmei Tu</p>
                    <p>Full Stack Web Developer</p>
                </h1>
                <Link to="/about">
                    <button>More Info</button>
                </Link>
            </div>
            <div className="person">
                <img src={`${process.env.PUBLIC_URL}/assets/images/picture-of-me.jpeg`}
                    alt="Me"
                />
            </div>
        </div>
    )
}

export default Home;
