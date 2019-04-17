const Router = require('express')
const jwt = require('jsonwebtoken')
const routes = Router.Router()
const firebase = require("firebase");
const firebaseConfig = require("../config/firebase")

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

routes.get("/", (req, res) => {
    res.send("User service")
})

routes.post("/signup", (req, res) => {
    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let email = req.body.email
    let password = req.body.password
    let phoneNo = req.body.phoneNo
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
        res.status(201).json({
            fullname: firstname + " " + lastname,
            email: email
        })
    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        res.status(401).json({
            message: "WrongParametre",
            err: errorMessage
        })
      });
})

routes.post("/signin", (req, res) => {
    let username = req.body.username
    let password = req.body.password
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then(() => {
        res.status(200).json({
            message: "Authorized!!"
        })
    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        res.status(401).json({
            message: "Wrong username or password.",
            err: errorMessage
        })
      });
      
})

module.exports = routes