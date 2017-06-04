'use strict'
const Generator = require('yeoman-generator')

const files = [
  'Component.js', 'Component.test.js'
]

module.exports = class extends Generator {
  prompting () {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your component name',
      default: 'MyComponent'
    }, {
      type: 'input',
      name: 'module',
      message: 'Name of the parent module',
      default: 'misc'
    }, {
      type: 'confirm',
      name: 'container',
      message: 'If the component should be a container',
      default: false
    }]).then(answers => {
      this.promptOptions = answers
    })
  }

  writing () {
    let container = this.promptOptions.container
    let name = this.promptOptions.name
    let module = this.promptOptions.module
    let slashIndex = name.lastIndexOf('/')
    let pathPrefix = name.slice(0, slashIndex > -1 ? slashIndex : 0)
    let componentName = name.slice(slashIndex + 1)
    componentName = name[0].toUpperCase() + name.slice(1)
    files.forEach(file => this.fs.copyTpl(
      this.templatePath(file),
      this.destinationPath(`src/modules/${module}/${pathPrefix}/${componentName.toLowerCase()}/${file.replace('Component', componentName)}`),
      { name: componentName, container }
    ))
  }
}
