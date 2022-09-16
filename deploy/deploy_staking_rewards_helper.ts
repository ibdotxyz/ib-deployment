import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy, execute, get} = deployments;

  const {admin, deployer, wrappedNative} = await getNamedAccounts();

  const factory = await get('StakingRewardsFactory')

  await deploy('StakingRewardsHelper', {
    from: deployer,
    args: [factory.address, wrappedNative],
    log: true
  })

  await execute('StakingRewardsHelper', { from: deployer, log: true }, 'transferOwnership', admin);
};
export default func;
func.tags = ['StakingRewardsHelper'];
