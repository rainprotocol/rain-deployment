import { ethers } from "hardhat";
const hre = require("hardhat");
import {deploy,  linkBytecode, factoriesDeploy} from "./utils";

/*
import BFactory  from "@beehiveinnovation/rain-protocol/dist/e07af1be5703ebddd8faf546df1e98f23164c253/artifacts/@beehiveinnovation/balancer-core/contracts/BFactory.sol/BFactory.json";
import CRPFactory from "@beehiveinnovation/rain-protocol/dist/e07af1be5703ebddd8faf546df1e98f23164c253/artifacts/@beehiveinnovation/configurable-rights-pool/contracts/CRPFactory.sol/CRPFactory.json";
import RightsManager from "@beehiveinnovation/rain-protocol/dist/e07af1be5703ebddd8faf546df1e98f23164c253/artifacts/@beehiveinnovation/configurable-rights-pool/libraries/RightsManager.sol/RightsManager.json";
import SmartPoolManager from "@beehiveinnovation/rain-protocol/dist/e07af1be5703ebddd8faf546df1e98f23164c253/artifacts/@beehiveinnovation/configurable-rights-pool/libraries/SmartPoolManager.sol/SmartPoolManager.json";
import BalancerSafeMath from "@beehiveinnovation/rain-protocol/dist/e07af1be5703ebddd8faf546df1e98f23164c253/artifacts/@beehiveinnovation/configurable-rights-pool/libraries/BalancerSafeMath.sol/BalancerSafeMath.json";
//import Prestige from '../balancer_mainnet_bytecode/PrestigeDeployTx.json';
**/
import { RightsManager__factory } from './typechain/factories/RightsManager__factory';
import { CRPFactory__factory } from './typechain/factories/CRPFactory__factory';
import { BFactory__factory } from './typechain/factories/BFactory__factory';



// This is provisional while we fix the JSON that we get on the import
import CRPFactoryProvisional from "./dist/CRPFactory.sol/CRPFactory.json";

import BFactory  from "../artifacts/@beehiveinnovation/balancer-core/contracts/BFactory.sol/BFactory.json";
import RightsManager from "../artifacts/@beehiveinnovation/configurable-rights-pool/libraries/RightsManager.sol/RightsManager.json";
import SmartPoolManager from "../artifacts/@beehiveinnovation/configurable-rights-pool/libraries/SmartPoolManager.sol/SmartPoolManager.json";
import BalancerSafeMath from "../artifacts/@beehiveinnovation/configurable-rights-pool/libraries/BalancerSafeMath.sol/BalancerSafeMath.json";
//import Prestige from '../balancer_mainnet_bytecode/PrestigeDeployTx.json';


   
async function main() {
    const signers = await ethers.getSigners();
    const signer = signers[0];
    
    // Deploying balancer
    const SmartPoolManagerAddress = await deploy(SmartPoolManager, signer, []);
    console.log('- SmartPoolManager deployed to: ', SmartPoolManagerAddress);

    const BalancerSafeMathAddress = await deploy(BalancerSafeMath, signer, []);
    console.log('- BalancerSafeMath deployed to: ', BalancerSafeMathAddress);

    const RightsManagerAddress = await deploy(RightsManager, signer, []);
    console.log('- RightsManager deployed to: ', RightsManagerAddress);

    const BFactoryAddress = await deploy(BFactory, signer, []);
    console.log('- BFactory deployed to: ', BFactoryAddress);

    let _CRPFactory = CRPFactoryProvisional;
    _CRPFactory.bytecode = linkBytecode(_CRPFactory.bytecode, {
        "RightsManager" : RightsManagerAddress,
        "SmartPoolManager" : SmartPoolManagerAddress,
        "BalancerSafeMath" : BalancerSafeMathAddress
    });
    const CRPFactoryAddress = await deploy(_CRPFactory, signer, []);
    console.log('- CRPFactory deployed to: ', CRPFactoryAddress);

    // Deploying trust factory
    const crpFactory = CRPFactory__factory.connect(CRPFactoryAddress, signer);
    const bFactory = BFactory__factory.connect(BFactoryAddress, signer);

    const  addresses = await factoriesDeploy(crpFactory, bFactory, signer);
    console.log('- Trust factory deployed to: ', addresses.trustFactoryAddress);
}
main();