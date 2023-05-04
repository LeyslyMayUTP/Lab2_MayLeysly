function validate(req, res, next){
    console.log("este es un middleware")
    res.status(401).send({status:401, msg: "access denain"})
}


module.exports={
    validate
}