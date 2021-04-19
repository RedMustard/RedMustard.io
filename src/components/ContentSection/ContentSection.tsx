import React from 'react';

interface ContentSectionProps {
    children: any;
    className?: string;
}

const ContentSection = ({ children, className = '' }: ContentSectionProps) => (
    <section className={`content-section l-margin-btm-xxl ${className}`}>
        {children}
    </section>
);

export default ContentSection;
