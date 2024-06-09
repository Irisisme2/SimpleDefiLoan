import Web3 from 'web3';

const web3 = new Web3('https://public-node.testnet.rsk.co');
const address = 'YOUR_CONTRACT_ADDRESS'; // Zastąp adresem swojego kontraktu
const abi = [/* ABI from the contract */];

const contract = new web3.eth.Contract(abi, address);

export default contract;
