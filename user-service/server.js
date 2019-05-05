const app = require("./app");

port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("App listening on port 5000");
});

module.exports = app;
