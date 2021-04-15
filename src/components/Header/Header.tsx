import React from 'react';
import Link from 'next/link';
import Nav from '../Nav/Nav';


const Header = () => (
    <header className="header">
        <div className="header__container l-padding-horz-md l-padding-vert-sm">
            <div className="header__nav h-h4">
                <Nav />
            </div>
            <Link href="/">
                <div className="header__title h-h1">
                    RedMustard.io
                </div>
            </Link>
        </div>
    </header>
);

export default Header;
