'use strict'
const Generator = require('yeoman-generator')
const fs = require('fs')
const readline = require('readline')
const standard = require('standard')

const fileTemplate = 'actions.js'

module.exports = class extends Generator {
  prompting () {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your action name',
      default: 'MyAction'
    }, {
      type: 'input',
      name: 'path',
      message: 'Path to use relative to the src folder',
      default: 'actions'
    }]).then(answers => {
      this.promptOptions = answers
    })
  }

  writing () {
    let slashIndex = this.promptOptions.path.lastIndexOf('/')
    let folderName = this.promptOptions.path.slice(slashIndex + 1)
    let fileName = `${folderName}.${fileTemplate}`
    let path = `src/${this.promptOptions.path}/${fileName}`
    let name = this.promptOptions.name
    let completeFileName = this.destinationPath(path)

    let updateFile = () => {
      fs.readFile(this.templatePath('actions.js'), 'utf-8', (err, newData) => {
        if (err) return err

        newData = newData.replace(/<%= name %>/, name)
        let data = []
        let foundExport = false
        let rl = readline.createInterface({
          input: fs.createReadStream(completeFileName)
        })

        rl.on('line', line => {
          let testLine = line.replace(/\s/g, '')
          let newLine = newData.slice(0, newData.search(/\n/)).replace(/\s/g, '')
          foundExport |= testLine === newLine
          data.push(line)
        })

        rl.on('close', () => {
          let stream = fs.createWriteStream(path)
          data.forEach(d => stream.write(`${d}\n`))

          if (!foundExport) {
            stream.write(`\n${newData}`)
          }
          stream.end()
          stream.on('finish', () => {
            standard.lintFiles(fileName, {
              fix: true,
              cwd: this.destinationRoot()
            },
            err => err ? console.error(err) : '')
          })
        })
      })
    }

    fs.access(path, err => err ? this.fs.copyTpl(
      this.templatePath(fileTemplate),
      this.destinationPath(path),
      { name }
    ) : updateFile())
  }
}
