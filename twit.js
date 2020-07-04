require('dotenv').config()
const Twit = require("Twit");
const config = require("./config");
const T = new Twit(config);

module.export = T;
