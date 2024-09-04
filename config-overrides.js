//file cấu hình config đè create-react-app
const { override, useBabelRc } = require("customize-cra");

module.exports = override(
  useBabelRc()
);