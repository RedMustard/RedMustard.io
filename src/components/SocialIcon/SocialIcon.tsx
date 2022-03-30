import React, { useState } from 'react';
import { SocialIconsDisplayType } from '../../interfaces';

interface SocialIconProps {
    children: JSX.Element;
    href: string;
    label: string;
    displayType: SocialIconsDisplayType;
    className?: string;
}

const SocialIcon = ({
    children,
    href,
    label,
    displayType,
    className = '',
}: SocialIconProps) => {
    const [showText, setShowText] = useState(false);

    return (
        <div
            className={`social-icon social-icon--${displayType} l-margin-vert-sm l-margin-horz-md ${
                className || ''
            }`}
            onFocus={() => setShowText(true)}
            onBlur={() => setShowText(false)}
            onMouseOver={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
            onTouchStart={() => setShowText(true)}
            onTouchEnd={() => setShowText(false)}
        >
            <a
                className="social-icon__link h-link"
                target="_blank"
                rel="noreferrer"
                href={href}
                tabIndex={0}
            >
                {children}
            </a>
            {showText ? (
                <span
                    className={`social-icon__label social-icon__label--${displayType} h-h5`}
                >
                    {label}
                </span>
            ) : null}
        </div>
    );
};

export default SocialIcon;
