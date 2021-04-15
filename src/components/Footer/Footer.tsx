import React from 'react';


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer__content">
                <span>RedMustard.io &copy; {currentYear}</span>
            </div>
        </footer>
    );
};

export default Footer;
