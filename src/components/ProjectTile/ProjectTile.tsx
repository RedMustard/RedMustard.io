import React from 'react';
import { CircleIcon } from '../Icons/Circle';

interface ProjectTileProps {
    title: string;
    description: string;
    technologies: string[];
    icon: JSX.Element;
    href: string;
}

const ProjectTile = ({
    title,
    description,
    technologies,
    icon,
    href,
}: ProjectTileProps) => {
    const handleOnClick = () => {
        window.open(href, '_blank', 'noreferrer,noopener');
    };

    const getTechnologiesBullet = () => {
        const styledTechnologies: JSX.Element[] = [];

        technologies.forEach((technology) => {
            styledTechnologies.push(
                <div className="project-tile__bullet h-h5" key={`${title}-${technology}`}>
                    {technology}
                    <CircleIcon />
                </div>,
            );
        });

        return styledTechnologies;
    };

    return (
        <button type="button" onClick={handleOnClick} className="project-tile">
            <div className="project-tile__header l-margin-btm-lg">
                <div className="project-tile__icon">
                    {icon}
                </div>
                <div className="project-tile__title h-h4">
                    {title}
                </div>
            </div>
            <div className="project-tile__description l-margin-btm-xl">
                {description}
            </div>
            <div className="project-tile__technologies">
                {getTechnologiesBullet()}
            </div>
        </button>
    );
};

export default ProjectTile;
