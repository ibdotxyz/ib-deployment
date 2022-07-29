# Cream Finance Deployment Script

## Installation

    git clone https://github.com/CreamFi/cream-deployment
    cd cream-deployment
    yarn install

## Setup

### .env
Copy `.env` from `.env.default`

    cp .env.default .env

abd fill in all the variables in `.env`

### hardhat.config.ts
Modify `namedAccounts` in `hardhat.config.ts` and add networks if necessary.

## Deployment
### Deploy Comptroller, PriceOracle, InterestRateModel, etc.

    npx hardhat deploy --network <NETWORK>

#### Options

`--tags <tags>`: only excute deploy scripts with the given tags (separated by commas) and their dependencies

See more options [here](https://github.com/wighawag/hardhat-deploy#1-hardhat-deploy) for `hardhat deploy`.

### Deploy crTokens
Edit constructor arguments in `/scripts/deploy_new_markets.ts` before executing the comment below.

    npx hardhat run scripts/deploy_new_markets.ts --network <NETWORK>

### Support Market
Fill up the crToken address, price feed source, reserve factors, etc. before execution

    npx hardhat run scripts/support_multiple_markets.ts --network <NETWORK>


## Verification

    npx hardhat etherscan-verify --network <NETWORK> [--api-key <ETHERSCAN_API_KEY>]

This will verify all deployed contract under `deployments/<NETWORK>` on etherscan.
See [hardhat-deploy](https://github.com/wighawag/hardhat-deploy#4-hardhat-etherscan-verify) for more details.

Note: While verifying contracts under `compound-protocol`, `--license BSD-3-Clause --force-license` is required to avoid unsupported license error.

    npx hardhat etherscan-verify --network <NETWORK> --license BSD-3-Clause --force-license [--api-key <ETHERSCAN_API_KEY>]

Note: CWrappedNativeDelegator and CErc20Delegator need to verify manually by uploading the flatten source code `CWrappedNativeDelegatorFlatten.sol` and `CErc20DelegatorFlatten.sol`
