'use strict'
const Generator = require('yeoman-generator')
const fs = require('fs')
const readline = require('readline')
const standard = require('standard')

const fileTemplate = 'reducer.js'
const combineReducersLine = 'const rootReducer = combineReducers({'.replace(/\s/g, '')

module.exports = class extends Generator {
  prompting () {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your reducer name',
      default: 'MyReducer'
    }, {
      type: 'input',
      name: 'path',
      message: 'Path to use relative to the src folder',
      default: 'reducers'
    }]).then(answers => {
      this.promptOptions = answers
    })
  }

  writing () {
    const slashIndex = this.promptOptions.path.lastIndexOf('/')
    const folderName = this.promptOptions.path.slice(slashIndex + 1)
    const name = this.promptOptions.name.toLowerCase() || folderName.toLowerCase()
    const fileName = `${name}.${fileTemplate}`
    const path = `src/${this.promptOptions.path}/${fileName}`
    const reducersPath = this.destinationPath('src/rootReducer.js')

    const newImport = `import ${name}Reducer from '${path}'`
    const importLine = newImport.replace(/\s/g, '')
    const newData = `  ${name}: ${name}Reducer`
    const dataLine = newData.replace(/\s/g, '')

    let data = []
    let foundReducer = false
    let foundCombine = false
    let foundImport = false
    let rl = readline.createInterface({
      input: fs.createReadStream(reducersPath)
    })

    rl.on('line', line => {
      let testLine = line.replace(/\s/g, '')
      foundImport |= testLine === importLine
      if (testLine === combineReducersLine) {
        foundCombine = true
        if (!foundImport) {
          data.splice(-1, 0, newImport)
        }
      }
      if (foundCombine) {
        foundReducer |= testLine === dataLine
        if (testLine === '})') {
          foundCombine = false
          if (!foundReducer) {
            let lastDataLine = data[data.length - 1].replace(/\s/g, '')
            if (lastDataLine !== combineReducersLine) {
              data[data.length - 1] += ','
            }
            data.push(newData)
          }
        }
      }
      data.push(line)
    })

    rl.on('close', () => {
      let stream = fs.createWriteStream(reducersPath)
      data.forEach(d => stream.write(`${d}\n`))
      stream.end()
      stream.on('finish', () => {
        this.fs.copy(
          this.templatePath(fileTemplate),
          this.destinationPath(path)
        )
        standard.lintFiles(fileName, {
          fix: true,
          cwd: this.destinationRoot()
        },
        err => err ? console.error(err) : '')
      })
    })
  }
}
