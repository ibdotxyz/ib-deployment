import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;
  const parseEther = hre.ethers.utils.parseEther;

  const {deployer, admin} = await getNamedAccounts();

  let baseRatePerYear;
  let multiplierPerYear;
  let jumpMultiplierPerYear;
  let kink1;
  let kink2;
  let roof;

  // deploy MajorIRM
  baseRatePerYear = 0;
  multiplierPerYear = parseEther('0.14');
  jumpMultiplierPerYear = parseEther('2');
  kink1 = parseEther('0.8');
  kink2 = parseEther('0.9');
  roof = parseEther('1');

  await deploy('MajorIRM', {
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


  // deploy StableIRM
  baseRatePerYear = 0;
  multiplierPerYear = parseEther('0.104');
  jumpMultiplierPerYear = parseEther('8');
  kink1 = parseEther('0.8');
  kink2 = parseEther('0.9');
  roof =  parseEther('1');

  await deploy('StableIRM', {
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

  // deploy GovIRM
  baseRatePerYear = 0;
  multiplierPerYear = parseEther('0.14');
  jumpMultiplierPerYear = parseEther('5');
  kink1 = parseEther('0.7');
  kink2 = parseEther('0.8');
  roof =  parseEther('1');

  await deploy('GovIRM', {
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

  // deploy WETH IRM
  baseRatePerYear = 0;
  multiplierPerYear = parseEther('0.1');
  jumpMultiplierPerYear = parseEther('2.5');
  kink1 = parseEther('0.8');
  kink2 = parseEther('0.9');
  roof =  parseEther('1');

  await deploy('WETHIRM', {
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

  // deploy IBFF IRM
  baseRatePerYear = 0;
  multiplierPerYear = parseEther('0.4');
  jumpMultiplierPerYear = parseEther('8');
  kink1 = parseEther('0.8');
  kink2 = parseEther('0.9');
  roof =  parseEther('1');

  await deploy('IBFFIRM', {
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
