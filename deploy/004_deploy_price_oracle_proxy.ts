import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;

  const {deployer, v1PriceOracle, admin, chainlinkRegistry, bandReference} = await getNamedAccounts();

  await deploy('PriceOracleProxyIB', {
    from: deployer,
    args: [admin, v1PriceOracle, chainlinkRegistry, bandReference],
    log: true,
  });

};
export default func;
func.tags = ['PriceOracleProxyIB'];
