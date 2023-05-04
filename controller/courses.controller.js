const express = require("express")
const routes = express.Router()
let courses = ["Node", "Nest", "Go"]
const { saveCourses, getCourses } = require("../services/courses.services")

routes.get('/', async (req, res) => {
    let dataInfo =  await getCourses()
    res.status(200).send({ status: 200, msg: "List of courses", data: dataInfo })

})

routes.post('/', (req, res) => {
    let { body } = req
    saveCourses(body)
    res.status(201).send({ status: 201, msg: "New record avaliabled" })
})

module.exports = routes