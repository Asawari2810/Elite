const chapterService = require('../service/chapterService');

class ChapterController {

    static addChapter(req,res){
        let payload  = req.body;
        chapterService.addChapter(payload).then( (chapter) => {
            res.send(chapter)
        })
        .catch(err => {
            res.status(500);
            res.send(err)
        })
    }

    static getChapterByID(req,res){
        let id = req.params['chapterId']
        chapterService.getChapterByID(id).then( (chapter ) =>{
            res.send(chapter);
        })
        .catch(err => {
            res.status(500);
            res.send(err);
        }) 
    }

    // static getChapterBySubjectID(req,res){
    //     let id = req.params['subjectId']
    //     chapterService.getChapterBySubjectID(id).then( (chapter ) =>{
    //         res.send(chapter);
    //     })
    //     .catch(err => {
    //         res.status(500);
    //         res.send(err);
    //     }) 
    // }
}

module.exports = ChapterController;