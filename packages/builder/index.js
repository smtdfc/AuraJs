#!/usr/bin/env node

require("dotenv").config()
const yargs = require('yargs');
const path = require("path");
const tasks = require("./tasks");
console.log(process.env.FORCE_INSTALL)
yargs
  .command('init', 'Create a Rumious application ', {
    name: {
      description: 'App name',
      alias: 'n',
      type: 'string',
    },
  }, tasks.init)
  .command('build:dev', 'Built for development environment ', {},tasks.build.dev)
  .command('build:prod', 'Built for production environment ', {}, tasks.build.prod)
  .help()
  .argv;