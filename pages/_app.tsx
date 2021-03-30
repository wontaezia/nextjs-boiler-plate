import { AppProps } from 'next/app';
import { SwitchTransition, Transition } from 'react-transition-group';
import gsap from 'gsap';
import Layout from '@layout/Layout';
import { Provider } from 'react-redux';
import store from '@modules/store';
import { Global } from '@emotion/react';
import globalStyles from '@styles/global';

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <SwitchTransition>
                    <Transition key={router.pathname} timeout={600} in={true} onEnter={enter} onExit={exit} mountOnEnter={true} unmountOnExit={true}>
                        <Component {...pageProps} />
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
