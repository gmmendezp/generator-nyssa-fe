'use strict'
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting () {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: 'ReactTest'
      }
    ]).then(answers => {
      this.promptOptions = answers
    })
  }

  writing () {
    let name = this.promptOptions.name
    this.fs.copyTpl(this.templatePath(), this.destinationPath('.'), { name })
    this.fs.copyTpl(this.templatePath('.*'), this.destinationRoot(), { name })
  }

  install () {
    return this.npmInstall()
  }
}
