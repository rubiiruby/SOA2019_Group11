const fs = require("fs")
const jwt = require("jsonwebtoken")
const path = require("path")

// use 'utf8' to get string instead of byte array  (512 bit key)
const secretKey = fs.readFileSync(
  path.resolve(__dirname, "../../credentials/secret.key"),
  "utf8"
)

module.exports = {
  sign: (payload, $Options) => {
    // Token signing options
    const signOptions = {
      expiresIn: "2d", // 2 days validity
      algorithm: "HS256"
    }
    return jwt.sign(payload, secretKey, signOptions)
  },
  verify: (token, $Option) => {
    const verifyOptions = {
      algorithm: "HS256"
    }
    try {
      return jwt.verify(token, secretKey, verifyOptions)
    } catch (err) {
      return false
    }
  }
}
