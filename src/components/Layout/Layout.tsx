import React, { ReactNode } from 'react';
import Head from 'next/head';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

type Props = {
    children?: ReactNode;
    className?: string;
    title?: string;
};

const Layout = ({ children, title = 'RedMustard.io', className = '' }: Props) => (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>

        <Header />

        <div className={`content ${className}`}>
            {children}
        </div>

        <Footer />
    </>
);

export default Layout;
