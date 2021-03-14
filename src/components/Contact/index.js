import React from 'react';
import './style.css';

const Contact = () => {
    return (
        <div className="contact">
            <h1>Let's Connect!</h1>
            <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86094.7119870131!2d-122.22117132685327!3d47.597749393211615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906bcfa3a66041%3A0xbacf5482ead00765!2sBellevue%2C%20WA!5e0!3m2!1sen!2sus!4v1615676688335!5m2!1sen!2sus"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"></iframe>

            <div className="social">
                <h4>LinkedIn</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mengmei-tu/">
                        https://www.linkedin.com/in/mengmei-tu/
                </a>
                </p>

                <h4>GitHub</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/mmeii">
                        https://github.com/mmeii
                </a>
                </p>

                <h4>Email</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:mmtu0290@gmail.com">
                        mmtu0290@gmail.com
                </a>
                </p>

                <h4>Resume</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="Assets/MengmeiTu_Resume.pdf">
                        MengmeiTu_Resume
                </a>
                </p>

                <h4>Phone</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="tel:608-630-0288">
                        608-630-0288
                </a>
                </p>
            </div>
        </div>
    )
}

export default Contact;
