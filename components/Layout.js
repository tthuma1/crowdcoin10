import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';
import Favicon from 'react-favicon';

export default props => {
    return (
        <Container>
            <Head>
                <link
                    rel="stylesheet"
                    href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
                />
                <title>CrowdCoin</title>
            </Head>

            <Header />
            <Favicon url="https://raw.githubusercontent.com/TimThuma/crowdcoin10/master/static/favicon.ico" />
            {props.children}
        </Container>
    );
};
