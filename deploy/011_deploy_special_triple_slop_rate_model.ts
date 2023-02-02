import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';


// irm for ibGBP, ibKRW, ibCHF
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

  // deploy IBFF IRM
  baseRatePerYear = 0;
  multiplierPerYear = parseEther('0.13');
  jumpMultiplierPerYear = parseEther('8');
  kink1 = parseEther('0.8');
  kink2 = parseEther('0.9');
  roof =  parseEther('1');

  await deploy('IBFFIRM2', {
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
func.tags = ['TripleSlopeRateModel2'];
