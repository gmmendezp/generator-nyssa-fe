'use strict'
const Generator = require('yeoman-generator')
const fs = require('fs')
const readline = require('readline')

const fileTemplate = 'epic.js'
const combineEpicsLine = 'const rootEpic = combineEpics('.replace(/\s/g, '')
const singleLineEpicsLineEmpty = 'const rootEpic = combineEpics()'.replace(
  /\s/g,
  ''
)
const singleLineEpicsLineRegex = new RegExp(
  'const rootEpic = combineEpics(.+)'.replace(/\s/g, '')
)

module.exports = class extends Generator {
  prompting () {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your epic name',
        default: 'MyEpic'
      },
      {
        type: 'input',
        name: 'path',
        message: 'Path to use relative to the src folder',
        default: 'epics'
      }
    ]).then(answers => {
      this.promptOptions = answers
    })
  }

  writing () {
    const name = this.promptOptions.name.toLowerCase()
    const fileName = `${name}.${fileTemplate}`
    const path = `src/${this.promptOptions.path}/${fileName}`
    const epicsPath = this.destinationPath('src/rootEpic.js')

    const newImport = `import ${name}Epic from '${path}'`
    const importLine = newImport.replace(/\s/g, '')
    const newData = `  ${name}Epic`
    const dataLine = newData.replace(/\s/g, '')

    let data = []
    let foundEpic = false
    let foundCombine = false
    let foundImport = false
    let rl = readline.createInterface({
      input: fs.createReadStream(epicsPath)
    })

    rl.on('line', line => {
      let testLine = line.replace(/\s/g, '')
      foundImport |= testLine === importLine
      if (testLine === combineEpicsLine) {
        foundCombine = true
        if (!foundImport) {
          data.splice(-1, 0, newImport)
        }
      }
      if (foundCombine) {
        foundEpic |= testLine === dataLine
        if (testLine === ')') {
          foundCombine = false
          if (!foundEpic) {
            let lastDataLine = data[data.length - 1].replace(/\s/g, '')
            if (lastDataLine !== combineEpicsLine) {
              data[data.length - 1] += ','
            }
            data.push(newData)
          }
        }
      }
      if (!foundCombine && testLine === singleLineEpicsLineEmpty) {
        if (!foundImport) {
          data.splice(-1, 0, newImport)
        }
        data.push(line.slice(0, line.length - 1))
        data.push(newData)
        data.push(')')
      } else if (!foundCombine && singleLineEpicsLineRegex.test(testLine)) {
        if (!foundImport) {
          data.splice(-1, 0, newImport)
        }
        data.push(
          `${line.slice(0, line.length - 1)}, ${newData.replace(/ /g, '')})`
        )
      } else {
        data.push(line)
      }
    })

    rl.on('close', () => {
      let stream = fs.createWriteStream(epicsPath)
      data.forEach(d => stream.write(`${d}\n`))
      stream.end()
      stream.on('finish', () => {
        this.fs.copy(
          this.templatePath(fileTemplate),
          this.destinationPath(path)
        )
      })
    })
  }
}
