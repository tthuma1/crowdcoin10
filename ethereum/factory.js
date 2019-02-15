import web3 from './web3';
import CompiledFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CompiledFactory.interface),
    '0x9A41A6532C975582C95df5E39e272eB92705eF15'
);

export default instance;
