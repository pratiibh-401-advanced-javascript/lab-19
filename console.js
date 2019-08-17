'use strict';

const theword = require('./theword.js');

const io = require('socket.io-client');

const socket = io.connect('http://Lab19-env.zx8e8cbmdt.us-east-2.elasticbeanstalk.com');

socket.on('the-bird', theword);

// role name = AWSCodePipelineServiceRole-us-east-2-lab-19
