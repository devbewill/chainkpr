export const changelog = [
  {
    version: "1.0.5",
    released: "2023-10-18",
    list: [
      {
        type: "added",
        title: "Ability to delete models via API",
        description: "",
      },
      {
        type: "added",
        title: "Ability to login multiple instances with the same email",
        description: "",
      },
      {
        type: "added",
        title: "Asset form and view handling array of objects",
        description: "",
      },

      {
        type: "fixed",
        title: "Fixed asset relations in tables",
        description: "",
      },
    ],
  },
  {
    version: "1.0.4",
    released: "2023-10-03",
    list: [
      {
        type: "added",
        title:
          "Ability to set which props must be visibile during asset creation and which not",
        description: "",
      },
      {
        type: "added",
        title: "Export assets list in CSV or JSON format",
        description: "",
      },
      {
        type: "change",
        title: "Handling log file for csv import",
        description: "",
      },

      {
        type: "fixed",
        title: "FIxed user password update",
        description: "",
      },
      {
        type: "changed",
        title:
          "Refactored settings handling (decoupled public from private json)",
        description: "",
      },
    ],
  },
  {
    version: "1.0.3",
    released: "2023-09-19",
    list: [
      {
        type: "added",
        title: "Ability to add custom fields in user info",
        description:
          "New generic 'additional_info' field for users: users can have a generic JSON field that can contain custom information",
      },

      {
        type: "fixed",
        title: "Can not remove a label (a model must have at least one label)",
        description: "",
      },
      {
        type: "changed",
        title: "Redesigned search and filter box for assets list",
        description: "",
      },
      {
        type: "changed",
        title:
          "Refactored settings handling (decoupled public from private json)",
        description: "",
      },
    ],
  },
  {
    version: "1.0.2",
    released: "2023-09-05",
    list: [
      {
        type: "added",
        title: "Assets integration on Postgres",
        description: "assets are now saved also in Postgres",
      },
      {
        type: "added",
        title:
          "Added info on organization creation and expiration date on admin dashboard",
        description: "",
      },

      {
        type: "added",
        title: "Added asset counter box to admin and stakeholder dashboard",
        description: "lorem ipsum description",
      },
      {
        typed: "added",
        title:
          "Added to editor the ability to choose which props use on asset creation",
        description: "",
      },
    ],
  },
  {
    version: "1.0.1",
    released: "2023-08-23",
    list: [
      {
        type: "Added",
        title:
          "Ability to import a list of assets by .csv or json external file",
        description:
          "In case of errors while saving assets, returns a file id where there will be all occurred errors",
      },

      {
        type: "fixed",
        title: "Fixed non standard payload received from assignee list",
        description: "",
      },
    ],
  },
  {
    version: "1.0.0",
    released: "2023-08-05",
    list: [
      {
        type: "Added",
        title:
          "Added the ability to assign a specific owner to a specific mutation to an asset",
        description: "",
      },

      {
        type: "added",
        title: "Added a new filter based on Asset state in assets list section",
        description: "",
      },
      {
        type: "changed",
        title:
          "Groups showing by default real members and not inherited members",
        description: "",
      },
      {
        type: "fixed",
        title: "fixed asset mutation authorization check",
        description: "",
      },
    ],
  },
];
