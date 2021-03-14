import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <h4 className="subtitle">hello friends, I'm</h4>
                    <h1>Meng<span id="mei">mei</span> Tu</h1>
                    <h4 className="subtitle">Full Stack Web Developer</h4>
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
