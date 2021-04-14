import '../styles/styles.scss';

interface AppProps {
    Component: any;
    pageProps: any;
}

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default App;
