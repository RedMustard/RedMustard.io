// import { GetStaticProps } from 'next';

// import { App } from '../../interfaces';
// import { sampleAppData } from '../../utils/sample-data';
// import Layout from '../../components/Layout/Layout';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ContentSection from '../../components/ContentSection/ContentSection';


// type Props = {
//     items?: App[];
// };

// const WithStaticProps = ({ items }: Props) => (
const Projects = () => (
    <>
        <SectionTitle>
            <h1 id="projects">
                Projects
            </h1>
        </SectionTitle>

        <ContentSection>
            Nam cursus eros et lobortis ultrices. Suspendisse a ullamcorper tortor. Phasellus placerat vel ex id convallis. Mauris venenatis semper commodo. Quisque aliquet turpis in massa dapibus molestie. Donec fringilla dui ut quam lobortis, ut dictum ligula dignissim. Morbi in nulla laoreet, vestibulum elit eget, malesuada tellus. Pellentesque molestie, nisl ut varius congue, ante dui iaculis dui, a euismod felis purus quis nunc. In id odio eget libero porttitor vulputate. Nam eleifend gravida nibh. Donec in magna quis urna tincidunt feugiat. Etiam varius tempor sem eu pharetra. Nam rhoncus rhoncus odio vitae viverra. Suspendisse nunc ex, cursus a molestie et, ultrices vitae justo.
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
