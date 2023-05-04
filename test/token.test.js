const {generateToken} = require("../utils/token")
let token = generateToken({"name": "Pablo", "course": "node"})
console.log(token)