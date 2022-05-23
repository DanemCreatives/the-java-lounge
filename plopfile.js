module.exports = function (plop) {
  // create your generators here
  plop.setGenerator("component", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{properCase name}}/{{dashCase name}}.component.jsx",
        templateFile: "src/plop-templates/component.hbs",
      },
      {
        type: "add",
        path: "src/components/{{properCase name}}/{{dashCase name}}.style.scss",
        templateFile: "src/plop-templates/style.hbs",
      },
    ],
  });

  plop.setGenerator("page", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "page name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/pages/{{properCase name}}/{{dashCase name}}.page.jsx",
        templateFile: "src/plop-templates/page.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{properCase name}}/{{dashCase name}}.style.scss",
        templateFile: "src/plop-templates/style.hbs",
      },
    ],
  });

  plop.setGenerator("object", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "object name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/objects/{{properCase name}}/{{dashCase name}}.object.jsx",
        templateFile: "src/plop-templates/object.hbs",
      },
      {
        type: "add",
        path: "src/objects/{{properCase name}}/{{dashCase name}}.style.scss",
        templateFile: "src/plop-templates/style.hbs",
      },
    ],
  });
};
