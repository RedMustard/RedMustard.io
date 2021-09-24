import React, { useState } from 'react';
import { CloseIcon } from '../Icons/Close';
import { MenuIcon } from '../Icons/Menu';
import SocialIcons from '../SocialIcons/SocialIcons';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [touchStartPosX, setTouchStartPosX] = useState<number>();

    const setScrolling = (isNavOpen: boolean) => {
        if (isNavOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = 'auto';
            document.body.style.overflow = 'auto';
        }
    };

    const handleOnClick = () => {
        setIsOpen(!isOpen);
        setScrolling(!isOpen);
    };

    const handleOnTouchStart = (e: React.TouchEvent) => {
        setTouchStartPosX(e.targetTouches[0].clientX);
    };

    const handleOnTouchEnd = (e: React.TouchEvent) => {
        const touchEndPosX = e.changedTouches[0].clientX;

        if (touchStartPosX && touchEndPosX > touchStartPosX) {
            setIsOpen(!isOpen);
            setScrolling(!isOpen);
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

            <div className={`nav__menu-container ${isOpen ? 'nav__menu-container--open' : ''}`}>
                <button
                    type="button"
                    className={`nav__menu h-link-like ${isOpen ? 'nav__menu--open' : ''}`}
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
                className={`nav__links-container ${isOpen ? 'nav__links-container--open' : ''}`}
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
                    <SocialIcons displayType="horizontal" />
                </div>
            </div>
        </nav>
    );
};

export default Nav;
