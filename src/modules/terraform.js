const shell = require('shelljs')

function terraform(argv) {

    const path = `${process.env.PWD}/Terraform`

    shell.cd(path)

    if(argv) {
        shell.exec(`terraform init`)
        shell.exec(`terraform plan -var-file="../environments/dev/terraform.tfvars.json"`)
    } else {
        shell.exec(`terraform init`)
        shell.exec(`terraform apply -var-file="../environments/dev/terraform.tfvars.json" --auto-approve` )
    }
}



module.exports = { terraform }

