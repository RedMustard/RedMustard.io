import React, { useState } from 'react';
import SocialIcon from '../SocialIcon/SocialIcon';
import { CloseIcon } from '../Icons/Close';
import { MenuIcon } from '../Icons/Menu';
import { GitHubIcon } from '../Icons/GitHub';
import { LinkedInIcon } from '../Icons/LinkedIn';
import { MailIcon } from '../Icons/Mail';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [touchStartPosX, setTouchStartPosX] = useState<number>();

    const handleOnClick = () => {
        setIsOpen(!isOpen);

        //  TODO: Block scrolling when nav is open
        // if (!isOpen) {
        //     document.body.style.overflow = 'hidden';
        // } else {
        //     document.body.style.overflow = 'auto';
        // }
    };

    const handleOnTouchStart = (e: React.TouchEvent) => {
        setTouchStartPosX(e.targetTouches[0].clientX);
    };

    const handleOnTouchEnd = (e: React.TouchEvent) => {
        const touchEndPosX = e.changedTouches[0].clientX;

        if (touchStartPosX && touchEndPosX > touchStartPosX) {
            setIsOpen(!isOpen);

            //  TODO: Block scrolling when nav is open
            // if (!isOpen) {
            //     document.body.style.overflow = 'hidden';
            // } else {
            //     document.body.style.overflow = 'auto';
            // }
        }
    };

    return (
        <nav className="nav">
            <div
                role="presentation"
                className={`nav__overlay ${isOpen ? 'nav__overlay--open' : ''}`}
                onMouseDown={handleOnClick}
                onTouchStartCapture={handleOnTouchStart}
                onTouchEndCapture={handleOnTouchEnd}
            />

            <div
                className={`nav__menu-container ${
                    isOpen ? 'nav__menu-container--open' : ''
                }`}
            >
                <button
                    type="button"
                    className={`nav__menu h-link-like ${
                        isOpen ? 'nav__menu--open' : ''
                    }`}
                    onClick={handleOnClick}
                >
                    {isOpen ? (
                        <CloseIcon />
                    ) : (
                        <MenuIcon />
                    )}
                </button>
            </div>

            <div
                className={`nav__links-container ${
                    isOpen ? 'nav__links-container--open' : ''
                }`}
                onTouchStartCapture={handleOnTouchStart}
                onTouchEndCapture={handleOnTouchEnd}
            >
                <div className="nav-links">
                    <a
                        href="/#about"
                        data-scroll
                        type="button"
                        onClick={handleOnClick}
                        className="nav-links__link h-link"
                    >
                        About
                    </a>

                    <a
                        href="/#work"
                        data-scroll
                        type="button"
                        onClick={handleOnClick}
                        className="nav-links__link h-link"
                    >
                        Work
                    </a>

                    <a
                        href="/#projects"
                        data-scroll
                        type="button"
                        onClick={handleOnClick}
                        className="nav-links__link h-link"
                    >
                        Projects
                    </a>

                    <a
                        href="/resume"
                        data-scroll
                        type="button"
                        onClick={handleOnClick}
                        className="nav-links__link h-link"
                    >
                        Resume
                    </a>

                    {/* TODO: Add blog */}
                    {/*
                        eslint-disable
                        jsx-a11y/anchor-is-valid,
                        jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
                    */}
                    {/* <Link href="/blog">
                        <a
                            onClick={handleOnClick}
                            className="nav-links__link h-link"
                        >
                            Blog
                        </a>
                    </Link> */}
                    {/*
                        eslint-enable
                        jsx-a11y/anchor-is-valid,
                        jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
                    */}
                </div>

                <div className="nav-social-links">
                    <SocialIcon
                        href="https://github.com/RedMustard"
                        label="GitHub"
                        className="nav-social-links__link"
                    >
                        <GitHubIcon />
                    </SocialIcon>

                    <SocialIcon
                        href="https://www.linkedin.com/in/redmustard"
                        label="LinkedIn"
                        className="nav-social-links__link"
                    >
                        <LinkedInIcon />
                    </SocialIcon>

                    <SocialIcon
                        href="mailto:travis@redmustard.io"
                        label="E-Mail"
                        className="nav-social-links__link"
                    >
                        <MailIcon />
                    </SocialIcon>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
