import Image from 'next/image';
// import Link from 'next/link';
import React, { useState } from 'react';


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };

    return (

        <nav className="nav">
            <div
                role="none" // TODO: Change?
                className={`nav__overlay ${isOpen ? 'nav__overlay--open' : ''}`}
                onMouseDown={handleOnClick}
            />

            <div className={`nav__menu-container ${isOpen ? 'nav__menu-container--open' : ''}`}>
                <button
                    type="button"
                    className={`nav__menu h-link-like ${isOpen ? 'nav__menu--open' : ''}`}
                    onClick={handleOnClick}
                >
                    {
                        isOpen
                            ? <Image className="nav__menu-icon" src="/images/close.svg" alt="Menu" width="25" height="25" />
                            : <Image className="nav__menu-icon" src="/images/menu.svg" alt="Menu" width="25" height="25" />
                    }
                </button>
            </div>

            <div className={`nav__links-container ${isOpen ? 'nav__links-container--open' : ''}`}>
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
            </div>
        </nav>
    );
};

export default Nav;
