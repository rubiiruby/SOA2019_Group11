const port = process.env.PORT || 3001;
const app = require("./app");

app.listen(port, () => {console.log('App listening on port 3001')})

module.exports = app;
