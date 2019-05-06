const fs = require("fs")
const jwt = require("jsonwebtoken")
const path = require("path")

// use 'utf8' to get string instead of byte array  (512 bit key)
const secretKey = fs.readFileSync(
  path.resolve(__dirname, "../credentials/secret.key"),
  "utf8"
)

module.exports = {
  sign: (payload, $Options) => {
    // Token signing options
    const signOptions = {
      issuer: $Options.issuer,
      subject: $Options.subject,
      audience: $Options.audience,
      expiresIn: "30d", // 30 days validity
      algorithm: "HS256"
    }
    return jwt.sign(payload, secretKey, signOptions)
  },
  verify: (token, $Option) => {
    const verifyOptions = {
      issuer: $Option.issuer,
      subject: $Option.subject,
      audience: $Option.audience,
      expiresIn: "30d",
      algorithm: "HS256"
    }
    try {
      return jwt.verify(token, secretKey, verifyOptions)
    } catch (err) {
      return false
    }
  },
  decode: token => {
    //returns null if token is invalid
    return jwt.decode(token, { complete: true })
  }
}
