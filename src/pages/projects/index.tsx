import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ContentSection from '../../components/ContentSection/ContentSection';
import Grid from '../../components/Grid/Grid';
import ProjectTile from '../../components/ProjectTile/ProjectTile';
import { PianoIcon } from '../../components/Icons/Piano';
import { WebsiteIcon } from '../../components/Icons/Website';

const Projects = () => (
    <>
        <ContentSection sectionId="projects">
            <SectionTitle>
                <h1>Projects</h1>
            </SectionTitle>

            <Grid>
                <ProjectTile
                    title="Mustard Studio"
                    description="Electron-based polysynth and step sequencer using WebAudio API"
                    technologies={['Electron', 'Preact', 'WebAudio API']}
                    icon={<PianoIcon />}
                    key="project-mustard-studio"
                    href="https://github.com/RedMustard/mustard-studio"
                />
                <ProjectTile
                    title="RedMustard.io"
                    description="Personal website built using Next.js"
                    technologies={['Next.js', 'React', 'TypeScript']}
                    icon={<WebsiteIcon />}
                    key="project-redmustard-io"
                    href="https://github.com/RedMustard/RedMustard.io"
                />
            </Grid>
        </ContentSection>
    </>
);

export default Projects;
