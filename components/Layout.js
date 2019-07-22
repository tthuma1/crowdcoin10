import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';

export default props => {
    return (
        <Container>
            <Head>
                <link
                    rel="stylesheet"
                    href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
                />
                <title>CrowdCoin</title>
                <link
                    rel="shortcut icon"
                    type="image/ico"
                    href="../static/favicon.ico"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>

            <Header />
            {props.children}
        </Container>
    );
};
