require('@cypress/instrument-cra');
const injectCraDevServer = require('@cypress/react/plugins/react-scripts');
const installCoverageTask = require('@cypress/code-coverage/task');

module.exports = (on, config) => {
  injectCraDevServer(on, config);
  installCoverageTask(on, config);

  return config;
};
