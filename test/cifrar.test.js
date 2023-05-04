const { encriptPassword } = require("../utils/cifrar")

encriptPassword("adc", 10).then(data => {
    console.log(data)
}).catch(err => {
    console.log("There is problem")
    console.log(err)
})

// (async () => {
//     const { encriptPassword } = require("../utils/cifrar")
//     try {
//         let password = await encriptPassword()
//         console.log(password)
//     }
//     catch (err) {
//         console.log(err)
//     }
// })()
