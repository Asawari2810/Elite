const subjectService = require('../service/subjectService');

class SubjectController {

    static addSubject(req,res){
        let payload  = req.body;
        subjectService.addSubject(payload).then( (subject) => {
            res.send(subject)
        })
        .catch(err => {
            res.status(500);
            res.send(err)
        })
    }

    static getSubjectByID(req,res){
        let id = req.params['subjectId']
        subjectService.getSubjectByID(id).then( (subject ) =>{
            res.send(subject);
        })
        .catch(err => {
            res.status(500);
            res.send(err);
        }) 
    }

    static getAllSubject(req,res){
        subjectService.getAllSubject().then( (subject ) =>{
            res.send(subject);
        })
        .catch(err => {
            res.status(500);
            res.send(err);
        }) 
    }

    static getChapterBySubjectID(req,res){
        console.log("over here----", req.query)
        let id = req.params['subjectId']
        subjectService.getChapterBySubjectID(id).then( (chapter ) =>{
            res.send(chapter);
        })
        .catch(err => {
            res.status(500);
            res.send(err);
        }) 
    }
}

module.exports = SubjectController;