import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and Metamask is running
    web3 = new Web3(window.web3.currentProvider);
} else {
    // We are on the server *OR* Metamask is not installed

    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/3615d545c93d463196b85da80b8079ba'
    );
    web3 = new Web3(provider);
}

export default web3;
