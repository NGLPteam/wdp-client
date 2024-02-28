"use strict";

const configGql = require("./configs/config-gql");
const configTs = require("./configs/config-ts");
const configAll = require("./configs/config-all");
const configReact = require("./configs/config-react");
const configIgnores = require("./configs/config-ignores");
const configNext = require("./configs/config-next");

module.exports = [
  configIgnores,
  configAll,
  configNext,
  configReact,
  configTs,
  configGql,
];
