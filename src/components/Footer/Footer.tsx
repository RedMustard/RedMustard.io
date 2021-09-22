import Image from 'next/image';
import React from 'react';
import { GitHubIcon } from '../Icons/GitHub';
import { LinkedInIcon } from '../Icons/LinkedIn';
import { MailIcon } from '../Icons/Mail';
import SocialIcon from '../SocialIcon/SocialIcon';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer h-h5">
            <div className="footer__container l-padding-horz-lg l-padding-vert-md">
                <div className="footer__social-media-icons">
                    <SocialIcon href="https://github.com/RedMustard" label="GitHub">
                        <GitHubIcon />
                        {/* <Image className="social-media-icons__icon l-margin-horz-sm" src="/images/github.svg" alt="GitHub" width="40" height="40" /> */}
                    </SocialIcon>
                    <SocialIcon href="https://www.linkedin.com/in/redmustard" label="LinkedIn">
                        <LinkedInIcon />
                        {/* <Image className="social-media-icons__icon l-margin-horz-sm" src="/images/linkedin.svg" alt="GitHub" width="40" height="40" /> */}
                    </SocialIcon>
                    <SocialIcon href="mailto:travis@redmustard.io" label="E-Mail">
                        <MailIcon />
                        {/* <Image className="social-media-icons__icon l-margin-horz-sm" src="/images/mail.svg" alt="GitHub" width="40" height="40" /> */}
                    </SocialIcon>
                </div>
                <div className="footer__copyright">
                    <span>Designed and developed by Travis Barnes.</span>
                    <span>RedMustard.io &copy; {currentYear}</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
