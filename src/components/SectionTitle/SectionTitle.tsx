import React from 'react';

interface SectionTitleProps {
    children: any;
    className?: string;
}

const SectionTitle = ({ children, className = '' }: SectionTitleProps) => (
    <div className={`section-title l-margin-top-sm l-margin-btm-lg ${className}`}>
        {children}
        <span className={`section-title__border ${className ? `${className}__border` : ''}`} />
    </div>
);

export default SectionTitle;
