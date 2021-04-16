import React from 'react';

interface ContentSectionProps {
    children: any;
    className?: string;
}

const ContentSection = ({ children, className = '' }: ContentSectionProps) => (
    <div className={`content-section l-margin-btm-xxl ${className}`}>
        {children}
    </div>
);

export default ContentSection;
