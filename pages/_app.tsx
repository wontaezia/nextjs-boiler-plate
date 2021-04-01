import { useState, useEffect } from 'react';
import { AppProps, AppContext } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { SwitchTransition, Transition } from 'react-transition-group';
import gsap from 'gsap';
import Layout from '@layout/Layout';
import store from '@modules/store';
import { Global } from '@emotion/react';
import globalStyles from '@styles/global';

interface MyAppProps extends AppProps {
    isClient: boolean;
}

function MyApp({ Component, pageProps, router, isClient }: MyAppProps) {
    return (
        <Provider store={store}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
                <meta name="description" content="My First Static Website" />
                <meta name="keywords" content="nextjs,static,website" />
            </Head>
            <Layout path={router.pathname} isClient={isClient}>
                <SwitchTransition>
                    <Transition key={router.pathname} timeout={600} in={true} onEnter={enter} onExit={exit} mountOnEnter={true} unmountOnExit={true}>
                        <Component isClient={isClient} {...pageProps} />
                    </Transition>
                </SwitchTransition>
            </Layout>
            <Global styles={globalStyles} />
        </Provider>
    );
}

export default MyApp;

function enter(node: HTMLElement) {
    gsap.from(node, {
        duration: 0.5,
        autoAlpha: 0,
    });
}

function exit(node: HTMLElement) {
    gsap.to(node, {
        duration: 0.5,
        autoAlpha: 0,
    });
}

MyApp.getInitialProps = ({ ctx }: AppContext) => {
    const { req } = ctx;
    const isClient = !req || req.url?.startsWith('/_next/data');

    return {
        isClient,
    };
};
