import React from 'react';
// import { GetStaticProps } from 'next';

// import { App } from '../../interfaces';
// import { sampleAppData } from '../../utils/sample-data';
import Link from 'next/link';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ContentSection from '../../components/ContentSection/ContentSection';
import Grid from '../../components/Grid/Grid';
import ProjectTile from '../../components/ProjectTile/ProjectTile';
import { PianoIcon } from '../../components/Icons/Piano';
import { CodeIcon } from '../../components/Icons/Code';
import { WebsiteIcon } from '../../components/Icons/Website';


const Projects = () => (
    <>
        <ContentSection sectionId="projects">
            <SectionTitle>
                <h1>
                    Projects
                </h1>
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
                {/* <ProjectTile
                    title="SheerID JavaScript Library"
                    description="JavaScript library built on top of SheerID's API."
                    technologies={['React', 'Redux', 'TypeScript']}
                    icon={<CodeIcon />}
                    key="project-sheerid-jslib"
                    href="https:////www.npmjs.com/package/@sheerid/jslib"
                /> */}
            </Grid>

        </ContentSection>
    </>
);

// export const getStaticProps: GetStaticProps = async () => {
//     // Example for including static props in a Next.js function component page.
//     // Don't forget to include the respective types for any props passed into
//     // the component.
//     const items: App[] = sampleAppData;
//     return { props: { items } };
// };

export default Projects;
