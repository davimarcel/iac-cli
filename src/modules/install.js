const shell = require('shelljs')

function install(projectSelected) {
    console.log('Install project')

    const path = process.env.PWD
    const urlGit = project(projectSelected)

    console.log('URL GIT: ', urlGit)
    console.log('PATH: ', path)

    shell.cd(path)
    shell.exec(`git clone ${urlGit}`)
}

function project(projectSelected) {

    switch (projectSelected) {
        case 'locust':
          console.log('entrou no projectselect')
          projectSelected = 'https://github.com/davimarcel/IaC.Aws.ec2.locust.load.test.git'
          break;

        default:
          console.log('Sorry install');
    }

    return projectSelected;
}

module.exports = { install }
