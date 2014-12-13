Package.describe({
  name: "nickw:autoform-ionic",
  summary: "Ionic theme for Autoform",
  version: "0.1.0",
  git: "https://github.com/nickw/meteor-autoform-ionic.git"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0");
  api.use(["templating", "underscore"], "client");
  api.use("aldeed:autoform@4.2.0");
  api.addFiles([
    "ionic.html",
    "ionic.css",
    "ionic.js"
    ], "client");
  });
