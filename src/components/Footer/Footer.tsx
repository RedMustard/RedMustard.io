import Image from 'next/image';
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer h-h5">
            <div className="footer__container l-padding-horz-md l-padding-vert-sm">
                <div className="footer__copyright">
                    <span>RedMustard.io &copy; {currentYear}</span>
                </div>

                <div className="footer__social-media-icons">
                    {/* <a className="h-link" target="_blank" rel="noreferrer" href="https://soundcloud.com/redmustard">
                        <Image className="footer__social-media-icon l-padding-horz-sm" src="/images/soundcloud.svg" alt="Soundcloud" width="32" height="32" />
                    </a> */}

                    <a className="h-link" target="_blank" rel="noreferrer" href="https://github.com/RedMustard">
                        <Image className="footer__social-media-icon l-padding-horz-sm" src="/images/github.svg" alt="GitHub" width="32" height="32" />
                    </a>
                    <a className="h-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/redmustard">
                        <Image className="footer__social-media-icon l-padding-horz-sm" src="/images/linkedin.svg" alt="LinkedIn" width="32" height="32" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
