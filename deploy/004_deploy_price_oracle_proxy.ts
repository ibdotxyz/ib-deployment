import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy, get, execute} = deployments;

  const {deployer, nativeUsdAggregator, admin, guardian} = await getNamedAccounts();
  const priceOracleV1Address = (await get('PriceOracleV1')).address

  await deploy('PriceOracleProxyFTM', {
    from: deployer,
    args: [deployer, priceOracleV1Address, '0xDA7a001b254CD22e46d3eAB04d937489c93174C3'],
    log: true,
  });

  await execute('PriceOracleProxyFTM', {from: deployer}, '_setGuardian', guardian);
  // await execute('PriceOracleProxyUSD', {from: deployer}, '_setAdmin', admin);

};
export default func;
func.tags = ['PriceOracleProxyUSD'];
