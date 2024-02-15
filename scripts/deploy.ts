import { ethers } from "hardhat";

async function main() {
  const totalSupply = 100_000_000

  const erc20 = await ethers.deployContract("BFAToken", [totalSupply]);

  await erc20.waitForDeployment();

  console.log(
    `BFAToken with ${
      totalSupply
    }total supply deployed to ${erc20.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
