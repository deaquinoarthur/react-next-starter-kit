module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.jsx',
        templateFile: 'component/index.jsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.js',
        templateFile: 'component/styles.js.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.jsx',
        templateFile: 'component/stories.jsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.jsx',
        templateFile: 'component/test.jsx.hbs'
      }
    ]
  }),
    plop.setGenerator('template', {
      description: 'Create a template',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your template name?'
        }
      ],
      actions: [
        {
          type: 'add',
          path: '../src/templates/{{name}}/index.jsx',
          templateFile: 'template/index.jsx.hbs'
        },
        {
          type: 'add',
          path: '../src/templates/{{name}}/styles.js',
          templateFile: 'template/styles.js.hbs'
        },
        {
          type: 'add',
          path: '../src/templates/{{name}}/test.jsx',
          templateFile: 'template/test.jsx.hbs'
        }
      ]
    })
}
