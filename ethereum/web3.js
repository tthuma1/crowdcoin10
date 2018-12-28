import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and Metamask is running
    web3 = new Web3(window.web3.currentProvider);
} else {
    // We are on the server *OR* Metamask is not installed

    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/8c2500763f11424aa2f57ae39a5f9d8b'
    );
    web3 = new Web3(provider);
}

export default web3;
