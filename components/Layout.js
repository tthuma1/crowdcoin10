import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';

let i = 0;
let https = require('https');
setInterval(function() {
    https.get('https://crowdcoin10.herokuapp.com/');
    console.log('ping pong ' + i++);
}, 10000); // 1500000 ms = 25 minutes

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
            </Head>

            <Header />
            {props.children}
        </Container>
    );
};
