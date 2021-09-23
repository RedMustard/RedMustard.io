import React from 'react';
import { SocialIconsDisplayType } from '../../interfaces';
import { GitHubIcon } from '../Icons/GitHub';
import { LinkedInIcon } from '../Icons/LinkedIn';
import { MailIcon } from '../Icons/Mail';
import SocialIcon from '../SocialIcon/SocialIcon';


interface SocialIconsProps {
    displayType: SocialIconsDisplayType;
    className?: string;
}

const SocialIcons = ({ displayType, className }: SocialIconsProps) => (
    <div className={`social-icons social-icons--${displayType} ${className || ''}`}>
        <SocialIcon
            displayType={displayType}
            className="social-icons__icon"
            href="https://github.com/RedMustard"
            label="GitHub"
        >
            <GitHubIcon />
        </SocialIcon>
        <SocialIcon
            displayType={displayType}
            className="social-icons__icon"
            href="https://www.linkedin.com/in/redmustard"
            label="LinkedIn"
        >
            <LinkedInIcon />
        </SocialIcon>
        <SocialIcon
            displayType={displayType}
            className="social-icons__icon"
            href="mailto:travis@redmustard.io"
            label="E-Mail"
        >
            <MailIcon />
        </SocialIcon>
    </div>
);

export default SocialIcons;
