'use strict'
const Generator = require('yeoman-generator')

const files = ['Form.js']

module.exports = class extends Generator {
  prompting () {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your form name',
        default: 'MyForm'
      },
      {
        type: 'input',
        name: 'module',
        message: 'Name of the parent module',
        default: 'misc'
      }
    ]).then(answers => {
      this.promptOptions = answers
    })
  }

  writing () {
    let name = this.promptOptions.name
    let module = this.promptOptions.module
    let slashIndex = name.lastIndexOf('/')
    let pathPrefix = name.slice(0, slashIndex > -1 ? slashIndex : 0)
    let formName = name.slice(slashIndex + 1)
    formName = name[0].toUpperCase() + name.slice(1)
    files.forEach(file =>
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(
          `src/modules/${module}/${pathPrefix}/${formName.toLowerCase()}/${file.replace(
            'Form',
            formName
          )}`
        ),
        { name: formName }
      )
    )
  }
}
