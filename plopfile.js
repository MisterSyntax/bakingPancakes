const promptDirectory = require('inquirer-directory');

module.exports = plop => {
  function isComponent(type) {
    return type === 'Component';
  }

  plop.setPrompt('directory', promptDirectory);
  plop.setGenerator('actions', {
    description: 'Generate file types',
    prompts: [
      {
        type: 'list',
        name: 'fileType',
        message: 'What shall we create?',
        choices: ['Component']
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'What shall we name this component?',
        when: data => {
          return isComponent(data.fileType);
        }
      },
      {
        basePath: './src',
        type: 'directory',
        name: 'directory',
        message: 'Where shall we put it?'
      }
    ],
    actions: data => {
      if (isComponent(data.fileType)) {
        const actions = [];
        switch (data.fileType) {
          case 'Component': {
            actions.push({
              type: 'add',
              path: 'src/{{directory}}/{{componentName}}.js',
              templateFile: 'plop-templates/Component.hbs'
            });

            actions.push({
              type: 'add',
              path: 'src/{{directory}}/{{componentName}}.test.js',
              templateFile: 'plop-templates/Component.test.hbs'
            });

            actions.push({
              type: 'add',
              path: 'src/{{directory}}/{{componentName}}.module.css',
              templateFile: 'plop-templates/Component.css.hbs'
            });
            break;
          }

          default:
        }

        return actions;
      }

      return [
        {
          type: 'add',
          path: 'src/{{directory}}/{{fileType}}.js',
          templateFile: 'plop-templates/{{fileType}}.hbs'
        },
        {
          type: 'add',
          path: 'src/{{directory}}/{{fileType}}.test.js',
          templateFile: 'plop-templates/{{fileType}}.test.hbs'
        }
      ];
    }
  });
};
