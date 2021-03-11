import React from 'react';
import './style.css';

const Skills = () => {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="content">
                <div>
                    <strong>Languages</strong>
                    <li>JavaScript</li>
                    {/* <li></li>
                <li></li>
                <li></li> */}
                </div>
                <div>
                    <strong>Frameworks/Libraries</strong>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>React.js</li>
                    <li>Bootstrap</li>
                </div>
                <div>
                    <strong>Databases</strong>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    {/* <li></li>
                <li></li> */}
                </div>
                <div>
                    <strong>Tools</strong>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Webpack</li>
                    <li>DevTools</li>
                </div>
            </div>
        </div>
    )
}

export default Skills;
