import React, { useState } from 'react';


interface IconLinkProps {
    children: JSX.Element;
    href: string;
    label: string;
    className?: string;
}

const IconLink = ({
    children,
    href,
    label,
    className = '',
}: IconLinkProps) => {
    const [showText, setShowText] = useState(false);

    return (
        <div className="social-media-icon">
            <div className={`social-media-icon__icon ${className}`}>
                { showText
                    ? <span className="social-media-icon__label">{label}</span>
                    : null
                }

                <a
                    className="h-link"
                    target="_blank"
                    rel="noreferrer"
                    href={href}
                    onFocus={() => setShowText(true)}
                    onBlur={() => setShowText(false)}
                    onMouseOver={() => setShowText(true)}
                    onMouseLeave={() => setShowText(false)}
                >
                    {children}
                </a>
            </div>
        </div>
    );
};

export default IconLink;
