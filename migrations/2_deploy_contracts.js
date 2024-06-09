// migrations/2_deploy_contracts.js
const LoanApplication = artifacts.require("LoanApplication");

module.exports = function(deployer) {
  deployer.deploy(LoanApplication);
};
