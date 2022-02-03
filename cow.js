'use strict'
const cowsay = require('cowsay');

module.exports.speakspeak = str => cowsay.say({"text" : str});

