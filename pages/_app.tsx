import { AppProps } from 'next/app';
import Layout from '@layout/Layout';
import { Provider } from 'react-redux';
import store from '@modules/store';
import { Global } from '@emotion/react';
import globalStyles from '@styles/global';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
                <Global styles={globalStyles} />
            </Layout>
        </Provider>
    );
}

export default MyApp;
