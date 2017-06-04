# Nyssa FE Generator

## Usage

First, install [Yeoman](http://yeoman.io) and generator-nyssa-fe using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo generator-nyssa-fe
```

## Templates

### Project

To generate a new project:

```bash
yo nyssa-fe
```

##### Options:

- `--skip-install`
  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.
- `--name=<project-name>`
  Name for the generated project. The default value is `ReactTest`.
- `--path=<project-path>`
  Relative path were the project will be generated, the generator will create the folders as needed. The default value is the current folder.

### Component

To generate a new component:

```bash
yo nyssa-fe:component
```

##### Options:

- `--name=<component-name>`
  Name for the generated component. The default value is `Component`. If the name has slashes it will use it as the whole path for the component.
- `--container`
  Flag to determine if the generated component should be a redux container.

### Action

To generate a new action:

```bash
yo nyssa-fe:action
```

##### Options:

- `--path=<path>`
  Path to the folder where the action should be stored. The file will take the name of the folder plus the actions suffix. If the file doesn't exist it will create it
- `--name=<action-name>`
  Name for the generated action. The default value is `newAction`.

### Reducer

To generate a new reducer:

```bash
yo nyssa-fe:reducer
```

##### Options:

- `--path=<path>`
  Path to the folder where the action should be stored. The file will take the name of the folder plus the reducer suffix.
- `--name=<reducer-name>`
  Name for the generated reducer, to use in the combine reducers file. The default value will take the last section of the path.
