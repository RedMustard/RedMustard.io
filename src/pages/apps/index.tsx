import { GetStaticProps } from 'next';

import { App } from '../../interfaces';
import { sampleAppData } from '../../utils/sample-data';
import Layout from '../../components/Layout/Layout';
// import List from '../../components/List';

// type Props = {
//     items?: App[];
// };

// const WithStaticProps = ({ items }: Props) => (
const WithStaticProps = () => (
    <Layout title="RedMustard.io | Apps">
        <h1 className="h-h1">Apps</h1>
        <h3 className="h-h3">Stay tuned!</h3>

        {/* <List items={items} /> */}

    </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
    // Example for including static props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    const items: App[] = sampleAppData;
    return { props: { items } };
};

export default WithStaticProps;
