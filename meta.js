module.exports = {
  helpers: {
    if_or: function(v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }
      return options.inverse(this);
    }
  },
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Vue.js project'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    multi: {
      type: 'confirm',
      message: 'Is a multi-page application?'
    },
    mobile: {
      type: 'confirm',
      message: 'Use mobile adaptive?'
    },
    router: {
      type: 'confirm',
      message: 'Use vue-router?'
    },
    axios: {
      type: 'confirm',
      message: 'Use axios?'
    },
    vuex: {
      type: 'confirm',
      message: 'Use vuex?'
    },
    element: {
      type: 'confirm',
      message: 'Use element?'
    }
  },
  filters: {
    'router/**/*': 'router',
    'store/**/*': 'vuex',
    'pages/**/*': 'multi',
  },
  completeMessage:
    'To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}'
};
