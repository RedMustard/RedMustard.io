import React from 'react';
import Link from 'next/link';


const Nav = () => (
    <nav className="nav">
        <Link href="/">
            <button type="button" className="nav__link h-link-like">Home</button>
        </Link>
        <Link href="/apps">
            <button type="button" className="nav__link h-link-like">Apps</button>
        </Link>
        <Link href="/about">
            <button type="button" className="nav__link h-link-like">About</button>
        </Link>
        <Link href="/blog">
            <button type="button" className="nav__link h-link-like">Blog</button>
        </Link>
    </nav>
);

export default Nav;
