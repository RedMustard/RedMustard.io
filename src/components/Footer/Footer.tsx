import React, { useEffect, useRef, useState } from 'react';
import { SocialIconsDisplayType } from '../../interfaces';
import SocialIcons from '../SocialIcons/SocialIcons';

export const MOBILE_WIDTH = 500;
export const FOOTER_TOP_PADDING = 50;

const Footer = () => {
    const footerRef = useRef<HTMLDivElement>(null);
    const [fixSocialIconsToRight, setFixSocialIconsToRight] = useState(false);
    const socialIconsDisplayType: SocialIconsDisplayType = fixSocialIconsToRight ? 'vertical' : 'horizontal';

    const handleWindowResize = () => {
        const currentWindowWidth = window.innerWidth;
        if (currentWindowWidth > MOBILE_WIDTH) {
            setFixSocialIconsToRight(true);
        } else {
            setFixSocialIconsToRight(false);
        }
    };

    // TODO: Move social icons to horizontal once reached the bottom of the page
    // const handleWindowScroll = () => {
    //     const footerBoundingRectangle = footerRef && footerRef.current ? footerRef.current.getBoundingClientRect() : undefined;
    //     const footerBoundingRectangleTop = () => {
    //         if (fixSocialIconsToRight) {
    //             return footerBoundingRectangle ? footerBoundingRectangle.bottom : undefined;
    //         }
    //         return footerBoundingRectangle ? footerBoundingRectangle.bottom : undefined;
    //     };
    //     console.log(footerBoundingRectangleTop());
    //     const currentWindowWidth = window.innerWidth;
    //     if (
    //         (footerBoundingRectangleTop() && (footerBoundingRectangleTop() as number) === document.documentElement.clientHeight)
    //         || (currentWindowWidth <= MOBILE_WIDTH)
    //     ) {
    //         setFixSocialIconsToRight(false);
    //     } else {
    //         setFixSocialIconsToRight(true);
    //     }
    // };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <footer className="footer">
            <div className={`footer__container footer__container--${socialIconsDisplayType} l-padding-horz-lg l-padding-vert-md`}>
                <div className={`footer__social-media-icons footer__social-media-icons--${socialIconsDisplayType}`}>
                    {
                        fixSocialIconsToRight
                            ? <SocialIcons displayType={socialIconsDisplayType} />
                            : <SocialIcons displayType={socialIconsDisplayType} />
                    }
                </div>
                <div ref={footerRef} className="footer__copyright h-h5 l-padding-vert-md">
                    <span>Designed and developed by Travis Barnes.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
