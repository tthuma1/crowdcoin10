import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';
let i = 0;
let http = require('http');
setInterval(function() {
    http.get('http://localhost:3000');
    console.log('ping pong' + i++);
}, 1000); // every 5 minutes (300000)

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
