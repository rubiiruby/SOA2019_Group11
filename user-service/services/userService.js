const firebase = require("firebase");
const firebaseConfig = require("../config/firebase");
const jwtService = require("./jwtService");

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = {
  signup: (req, res) => {
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let password = req.body.password;
    let phoneNo = req.body.phoneNo;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        res.status(201).json({
          fullname: firstname + " " + lastname,
          email: email
        });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        res.status(401).json({
          message: "WrongParametre",
          err: errorMessage
        });
      });
  },
  signin: (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        // PAYLOAD
        let payload = {
          data1: "Data 1",
          data2: "Data 2",
          data3: "Data 3",
          data4: "Data 4"
        };

        // Signing options
        sOptions = {
          issuer: "Authorizaxtion/Resource/This server",
          subject: "iam@user.me",
          audience: "Client_Identity" // this should be provided by client
        };

        const jwtResult = jwtService.sign(payload, sOptions);
        res.status(200).json({
          Authorization: "Bearer " + jwtResult
        });
        console.log(`${Date.now()} signin`);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        res.status(401).json({
          message: "Wrong username or password.",
          err: errorMessage
        });
      });
  }
};
