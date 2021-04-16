import { GetStaticProps, GetStaticPaths } from 'next';

import { App } from '../../interfaces';
import { sampleAppData } from '../../utils/sample-data';
import Layout from '../../components/Layout/Layout';
import ListDetail from '../../components/ListDetail';

type Props = {
    item?: App;
    errors?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
    if (errors) {
        return (
            <Layout title="RedMustard.io | Uh oh!">
                <p>
                    <span style={{ color: 'red' }}>Error:</span> {errors}
                </p>
            </Layout>
        );
    }

    return (
        <Layout
            title={`RedMustard.io | ${
                item ? item.title : 'App'
            }`}
        >
            {item && <ListDetail item={item} />}
        </Layout>
    );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on apps
    const paths = sampleAppData.map((app) => ({
        params: { route: app.route.toString() },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const route = params?.route;
        const item = sampleAppData.find((data) => data.route === route);
        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        return { props: { item } };
    } catch (err) {
        return { props: { errors: err.message } };
    }
};
