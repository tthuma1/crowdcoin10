import web3 from './web3';
import CompiledFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CompiledFactory.interface),
    '0x1092F17BD6b6E505df3e0E0Fa1B3b8D653a3ec72'
);

export default instance;
