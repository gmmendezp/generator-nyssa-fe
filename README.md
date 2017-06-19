# Nyssa FE Generator

This project uses [create-react-app](https://github.com/facebookincubator/create-react-app) as base. With a few additions like [Redux](http://redux.js.org/), [redux-observable](https://redux-observable.js.org/), [react-router](https://github.com/ReactTraining/react-router), [typestyle](https://github.com/typestyle/typestyle), [rimraf](https://github.com/isaacs/rimraf), [standard](https://standardjs.com/) and [prettier](https://github.com/prettier/prettier).

NOTE: It also adds prettier as a precommit hook with [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky).

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

##### Prompts:

- `name`
  Name for the generated project. The default value is `ReactTest`.

### Component

To generate a new component:

```bash
yo nyssa-fe:component
```

##### Prompts:

- `name`
  Name for the generated component. The default value is `MyComponent`. If the name has slashes it will use it as the whole path for the component.
- `module`
  Name of the parent module for the component. Default value is `misc`.
- `container`
  Flag to determine if the generated component should be a redux container. Default value is `false`.

### Action

To generate a new action:

```bash
yo nyssa-fe:action
```

##### Prompts:

- `name`
  Name for the generated action. The default value is `MyAction`.
- `path`
  Path to the folder where the action should be stored. The file will take the name of the folder plus the actions suffix. If the file doesn't exist it will create it. Default value is `actions`.

### Reducer

To generate a new reducer:

```bash
yo nyssa-fe:reducer
```

##### Prompts:

- `name`
  Name for the generated reducer, to use in the combine reducers file. The default value will take the last section of the path. Default value is `MyReducer`.
- `path`
  Path to the folder where the reducer should be stored. The file will use the name and the `reducer` suffix. Default value is `reducers`.

### Epic (redux-observable)

To generate a new epic:

```bash
yo nyssa-fe:epic
```

##### Prompts:

- `name`
  Name for the generated epic, to use in the combine epic file. Default value is `MyEpic`.
- `path`
  Path to the folder where the epic should be stored. The file will use the name and the `epic` suffix. Default value is `epics`.
