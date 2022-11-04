import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;
  const parseEther = hre.ethers.utils.parseEther;

  const {deployer} = await getNamedAccounts();


  let baseRatePerYear;
  let multiplierPerYear;
  let jumpMultiplierPerYear;
  let kink1;
  let kink2;
  let roof;

  baseRatePerYear = 0;
  multiplierPerYear = parseEther('0.104');
  jumpMultiplierPerYear = parseEther('8');
  kink1 = parseEther('0.8');
  kink2 = parseEther('0.9');
  roof = parseEther('1.5');

  await deploy('StableIRM2', {
    from: deployer,
    contract: 'TripleSlopeRateModel',
    args: [
      baseRatePerYear,
      multiplierPerYear,
      jumpMultiplierPerYear,
      kink1,
      kink2,
      roof,
    ],
    log: true
  });


};
export default func;
func.tags = ['TripleSlopeRateModel'];
