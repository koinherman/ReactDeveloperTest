const { readdirSync } = require("fs");

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => {
      return { name: dirent.name, value: dirent.name };
    });

module.exports = (plop) => {
  // - Component scaffolding -
  plop.setGenerator("component", {
    description: "Create a component",
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: "input",
        // Variable name for this input
        name: "name",
        // Prompt to display on command line
        message: "What is your component name?",
      },
    ],
    actions: (data) => {
      const path = "src/components/";
      data.featureCategoryPath = "../../";
      let actions = [
        {
          type: "add",
          path: path + "{{pascalCase name}}/{{pascalCase name}}.tsx",
          templateFile: "plop-templates/component/Functional.Component.tsx.hbs",
        },
        {
          type: "add",
          path: path + "{{pascalCase name}}/index.tsx",
          templateFile: "plop-templates/component/index.tsx.hbs",
        },
        {
          type: "add",
          path: path + "{{pascalCase name}}/{{pascalCase name}}Styles.ts",
          templateFile: "plop-templates/component/styles.ts.hbs",
        },
        {
          type: "add",
          path:
            path +
            "{{pascalCase name}}/Stories/{{pascalCase name}}.stories.tsx",
          templateFile: "plop-templates/component/stories.tsx.hbs",
        },
        {
          type: "add",
          path: path + "{{pascalCase name}}/{{pascalCase name}}.spec.tsx",
          templateFile: "plop-templates/component/test.spec.tsx.hbs",
        },
      ];
      return actions;
    },
  });
};
