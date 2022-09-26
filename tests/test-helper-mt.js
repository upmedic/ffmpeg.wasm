const chai = require("chai");
const constants = require("./constants");

global.expect = chai.expect;
global.createFFmpeg = require("../packages/ffmpeg-mt");
global.atob = require("./util").atob;
global.FFMPEG_TYPE = "mt";

Object.keys(constants).forEach((key) => {
  global[key] = constants[key];
});