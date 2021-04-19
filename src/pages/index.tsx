import ContentSection from '../components/ContentSection/ContentSection';
import Layout from '../components/Layout/Layout';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import AboutPage from './about';
import Projects from './projects';
import WorkPage from './work';

const IndexPage = () => {
    return (
        <Layout title="RedMustard.io" className="home">
            <SectionTitle>
                <h1>Stay tuned!</h1>
            </SectionTitle>

            <ContentSection>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas libero velit, imperdiet id sagittis quis, rutrum nec neque. Sed tortor augue, laoreet a varius vitae, laoreet et erat. Curabitur non euismod est. Quisque mattis nunc odio. Phasellus pulvinar mi at tristique convallis. Fusce quis mi maximus, semper eros non, hendrerit turpis. In cursus nisl id ante aliquam, ut elementum quam auctor.
            </ContentSection>

            <AboutPage />

            <WorkPage />

            <Projects />


        </Layout>
    );
};

export default IndexPage;
