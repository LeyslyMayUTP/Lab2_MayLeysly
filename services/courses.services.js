const {get} = require("../repository/courses.repository")

function saveCourses(data){
    console.log("Logica de negocios")
    
}

async function getCourses(){
    let lstCourses = await get()
    return  lstCourses
}


module.exports= {
    saveCourses,
    getCourses
}