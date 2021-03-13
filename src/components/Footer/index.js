import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <footer>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mengmei-tu/">
                <i class="fab fa-linkedin"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/mmeii">
                <i class="fab fa-github"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="mailto:mmtu0290@gmail.com">
                <i class="fas fa-envelope"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="Assets/MengmeiTu_Resume.pdf">
                <i class="fas fa-file-pdf"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="tel:608-630-0288">
                <i class="fas fa-phone-volume"></i>
            </a><div className="text-right">Copyright © Mengmei Tu | IAMMEI</div>
        </footer>
    )
}

export default Footer
