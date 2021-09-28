import React, { useEffect, useState } from 'react';
import { disableScroll, enableScroll } from '../../utils/browser';
import { CloseIcon } from '../Icons/Close';
import { MenuIcon } from '../Icons/Menu';
import SocialIcons from '../SocialIcons/SocialIcons';

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [touchStartPosX, setTouchStartPosX] = useState<number>();

    const setScrolling = (isOpen: boolean) => {
        if (isOpen) {
            disableScroll();
        } else {
            enableScroll();
        }
    };

    const handleOnClick = (isOpen: boolean) => {
        setIsNavOpen(!isOpen);
    };

    const handleOnTouchStart = (e: React.TouchEvent) => {
        setTouchStartPosX(e.targetTouches[0].clientX);
    };

    const handleOnTouchEnd = (e: React.TouchEvent, isOpen: boolean) => {
        const touchEndPosX = e.changedTouches[0].clientX;

        if (touchStartPosX && touchEndPosX > touchStartPosX) {
            setIsNavOpen(!isOpen);
            setScrolling(!isOpen);
        }
    };

    useEffect(() => {
        setScrolling(isNavOpen);
    }, [isNavOpen]);

    return (
        <nav className="nav">
            <div
                role="presentation"
                className={`nav__overlay ${isNavOpen ? 'nav__overlay--open' : ''}`}
                onMouseDown={() => handleOnClick(isNavOpen)}
                onTouchStartCapture={handleOnTouchStart}
                onTouchEndCapture={(e) => handleOnTouchEnd(e, isNavOpen)}
            />

            <div className={`nav__menu-container ${isNavOpen ? 'nav__menu-container--open' : ''}`}>
                <button
                    type="button"
                    className={`nav__menu h-link-like ${isNavOpen ? 'nav__menu--open' : ''}`}
                    onClick={() => handleOnClick(isNavOpen)}
                >
                    {isNavOpen ? (
                        <CloseIcon />
                    ) : (
                        <MenuIcon />
                    )}
                </button>
            </div>

            <div
                className={`nav__links-container ${isNavOpen ? 'nav__links-container--open' : ''}`}
                onTouchStartCapture={handleOnTouchStart}
                onTouchEndCapture={(e) => handleOnTouchEnd(e, isNavOpen)}
            >
                <div className="nav-links">
                    {/* TODO: About  */}
                    {/* <a
                        href="/#about"
                        data-scroll
                        type="button"
                        onClick={handleOnClick}
                        className="nav-links__link h-link"
                    >
                        About
                    </a> */}

                    {/* TODO: Work */}
                    {/* <a
                        href="/#work"
                        data-scroll
                        type="button"
                        onClick={handleOnClick}
                        className="nav-links__link h-link"
                    >
                        Work
                    </a> */}

                    <a
                        href="/#projects"
                        data-scroll
                        type="button"
                        onClick={() => {
                            if (isNavOpen) {
                                handleOnClick(isNavOpen);
                            }
                        }}
                        className="nav-links__link h-link"
                    >
                        Projects
                    </a>

                    {/* <a
                        href="/resume"
                        data-scroll
                        type="button"
                        onClick={handleOnClick}
                        className="nav-links__link h-link"
                    >
                        Resume
                    </a> */}
                    {/* <a
                        href="/hire"
                        data-scroll
                        type="button"
                        onClick={handleOnClick}
                        className="nav-links__link h-link"
                    >
                        Hire me
                    </a> */}

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
