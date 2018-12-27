import web3 from './web3';
import CompiledFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CompiledFactory.interface),
    '0xf964E59a696064F49176E2c43077BA237B310a7B'
);

export default instance;
