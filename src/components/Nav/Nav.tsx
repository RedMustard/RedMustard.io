import Image from 'next/image';
import React, { useState } from 'react';
import SocialIcon from '../SocialIcon/SocialIcon';


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = () => {
        setIsOpen(!isOpen);
    };

    return (

        <nav className="nav">
            <div
                role="none" // TODO: Change?
                className={`nav__overlay ${isOpen ? 'nav__overlay--open' : ''}`}
                onMouseDown={handleOnClick}
                onTouchMove={handleOnClick}
            />

            <div className={`nav__menu-container ${isOpen ? 'nav__menu-container--open' : ''}`}>
                <button
                    type="button"
                    className={`nav__menu h-link-like ${isOpen ? 'nav__menu--open' : ''}`}
                    onClick={handleOnClick}
                >
                    {
                        isOpen
                            ? <img className="nav__menu-icon" src="/images/close.svg" alt="Close" width="25" height="25" />
                            : <img className="nav__menu-icon" src="/images/menu.svg" alt="Menu" width="25" height="25" />
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

                <div className="nav-social-links">
                    <SocialIcon href="https://github.com/RedMustard" label="GitHub" className="nav-social-links__link">
                        <Image className="nav-social-links__icon" src="/images/github.svg" alt="GitHub" width="25" height="25" />
                    </SocialIcon>

                    <SocialIcon href="https://www.linkedin.com/in/redmustard" label="LinkedIn" className="nav-social-links__link">
                        <Image className="nav-social-links__icon" src="/images/linkedin.svg" alt="GitHub" width="25" height="25" />
                    </SocialIcon>

                    <SocialIcon href="mailto:travis@redmustard.io" label="E-Mail" className="nav-social-links__link">
                        <Image className="nav-social-links__icon" src="/images/mail.svg" alt="GitHub" width="25" height="25" />
                    </SocialIcon>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
