import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';

let https = require('https');
setInterval(function() {
    https.get('https://crowdcoin10.herokuapp.com/');
}, 1740000); // 28 minutes

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
                    href="../public/favicon.ico"
                />
            </Head>

            <Header />
            {props.children}
        </Container>
    );
};
