const firebase = require("firebase")
const firebaseConfig = require("../config/firebase")
const jwtService = require("./jwtService")

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

module.exports = {
  signup: (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const password = req.body.password
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().currentUser.updateProfile({
          displayName: `${firstName} ${lastName}`
        })

        res.status(201).json({
          fullname: firstName + " " + lastName,
          email: email
        })
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorMessage)
        res.status(401).json({
          message: "WrongParametre",
          err: errorMessage
        })
      })
  },
  signin: (req, res) => {
    let username = req.body.username
    let password = req.body.password
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then((user) => {
        // PAYLOAD
        let payload = {
          userId: firebase.auth().currentUser.uid,
          fullName: firebase.auth().currentUser.displayName
        }

        // Signing options
        sOptions = {
          issuer: "Authorizaxtion/Resource/This server",
          subject: "iam@user.me",
          audience: "Client_Identity" // this should be provided by client
        }

        const payload_res = {
          Authorization: `Bearer ${jwtService.sign(payload, sOptions)}`,
          fullName: firebase.auth().currentUser.displayName
        }
        res.status(200).json(payload_res)
        console.log(`${new Date().toString()} : signin`)
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        res.status(401).json({
          message: "Wrong username or password.",
          err: errorMessage
        })
      })
  }
}
