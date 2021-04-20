import React from 'react';

interface ContentSectionProps {
    children: any;
    sectionId: string;
    className?: string;
}

const ContentSection = ({ children, sectionId, className = '' }: ContentSectionProps) => (
    <section id={sectionId} className={`content-section l-padding-horz-lg ${className}`}>
        {children}
    </section>
);

export default ContentSection;
