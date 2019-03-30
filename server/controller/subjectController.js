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
}

module.exports = SubjectController;