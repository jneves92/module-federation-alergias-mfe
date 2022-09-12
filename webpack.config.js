const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe-alergias",
  exposes: {
    "./Module": "./src/app/alergias/alergias.module.ts",
    "./Component": "./src/app/alergias/alergias-form.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
