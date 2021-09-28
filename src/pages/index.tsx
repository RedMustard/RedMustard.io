import ContentSection from '../components/ContentSection/ContentSection';
import Layout from '../components/Layout/Layout';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Projects from './projects';

const IndexPage = () => {
    return (
        <Layout title="redmustard.io | home" className="home">

            <ContentSection sectionId="intro">
                <SectionTitle>
                    <h1>Stay tuned!</h1>
                </SectionTitle>
            </ContentSection>

            {/* TODO: <AboutPage /> */}

            {/* TODO: <WorkPage /> */}

            <Projects />


        </Layout>
    );
};

export default IndexPage;
