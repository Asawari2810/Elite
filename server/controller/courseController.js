const courseService = require('../service/courseService');

class CourseController {

    static addCourse(req,res){
        let payload  = req.body;
        courseService.addCourse(payload).then( (course) => {
            res.send(course)
        })
        .catch(err => {
            res.status(500);
            res.send(err)
        })
    }

    static getCourseByID(req,res){
        let id = req.params['courseId']
        courseService.getCourseByID(id).then( (course ) =>{
            res.send(course);
        })
        .catch(err => {
            res.status(500);
            res.send(err);
        }) 
    }


}

module.exports = CourseController