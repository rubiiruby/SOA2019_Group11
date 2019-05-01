const Router = require("express")
const routes = Router.Router()
const userService = require("../services/userService")

routes.get("/", (req, res) => {
  res.send("User service")
})

//Route to Sign up
routes.post("/signup", userService.signup)

//Route to Sign in
routes.post("/signin", userService.signin)

module.exports = routes
