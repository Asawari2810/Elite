const questionService = require('../service/questionService');

class QuestionController {

    static addQuestion(req,res){
        let payload  = req.body;
        questionService.addQuestion(payload, req, res).then( (question) => {
            res.send(question)
        })
        .catch(err => {
            res.status(500);
            res.send(err)
        })
    }

    static getFullTest(req, res) {
        console.log("req---", req.query)
        let query = req.query['subjectId']
        questionService.getFullTest(query)
        .then( (question) => {
            res.send(question)
        })
        .catch(err => {
            res.status(500);
            res.send(err)
        })
    }

    static getChapterTest(req, res) {
        let query = req.query['chapterId'];
        questionService.getChapterTest(query)
        .then( (question) => {
            res.send(question)
        })
        .catch(err => {
            res.status(500);
            res.send(err)
        })
    }

    // static getQuestionByID(req,res){
    //     let id = req.params['subjectId']
    //     subjectService.getSubjectByID(id).then( (subject ) =>{
    //         res.send(subject);
    //     })
    //     .catch(err => {
    //         res.status(500);
    //         res.send(err);
    //     }) 
    // }
}

module.exports = QuestionController;