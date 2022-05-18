#!/usr/bin/env node
var argv = require('yargs/yargs')(process.argv.slice(2)).argv;

console.dir(argv._[0])

switch (argv._[0]) {
  case 'install':
    let moduleInstall = require('./modules/install');
    moduleInstall.install(argv.project);
    console.log(argv.project)
    break;
  case 'configure':
    let moduleConfigure = require('./modules/configure')
    moduleConfigure.config() 
    break;
  case 'deploy':
    let moduleDeploy= require('./modules/terraform')
    moduleDeploy.terraform(argv.check) 
    break;
  default:
    console.log('Sorry');
}








// tfvars.global.region = region;
// tfvars.global.vpc_id = vpc_id;
// tfvars.global.subnet_id = subnet_id;

// tfvars.global.region = "us-east-1";
// tfvars.global.vpc_id = "vpc-fb1f8186"
// tfvars.global.subnet_id = "subnet-e93f22a4"
// tfvars.global.tags.Project = "LoadTest"
// tfvars.global.tags.Deploy = "Locust"


// fs.writeFileSync('./tfvars_v1.json', JSON.stringify(tfvars, null, 4), 'utf-8');

