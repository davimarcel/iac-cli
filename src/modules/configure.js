var argv = require('yargs/yargs')(process.argv.slice(2)).argv;
const fs = require('fs');

function config() {
    const path = `${process.env.PWD}/environments/dev/terraform.tfvars.json`
    const data = fs.readFileSync(path, 'utf-8');
    const tfvars = JSON.parse(data)
    
    // const data = {
    //   "region": null,
    //   "vpc_id": null,
    //   "subnet_id": null
    // }

  
    argv.region  ? tfvars.global.region    = argv.region    : tfvars.global.region
    argv.subnet_id ? tfvars.global.subnet_id = argv.subnet_id : tfvars.global.subnet_id 
    argv.vpc_id    ? tfvars.global.vpc_id    = argv.vpc_id    : tfvars.global.vpc_id
  
    // console.log(JSON.stringify(tfvars.global.region, null, 4))
    console.log('subnet_id Args -->', argv.subnet_id)
    console.log('subnet_id No Args -->', tfvars.global.subnet_id)
    
    // console.log(path)
    fs.writeFileSync(path, JSON.stringify(tfvars, null, 4), 'utf-8');


  }

  module.exports = { config }