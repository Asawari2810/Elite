const userChapterTestService = require('../service/userChapterTestService');

class UserChapterTestController {

    static submitChapterTest(req,res){
        let userId  = req.body['appUser']['id'];
        delete req.body['appUser'];
        let payload = req.body;
        payload.user_id = userId;
         console.log("payload----", payload)
        userChapterTestService.submitChapterTest(payload).then( (user) => {
            res.send(user)
        })
        .catch(err => {
            res.status(500);
            res.send(err)
        })
    }

    static getChapterTestById(req,res){
        let id = req.params['userChapterTest']
        userChapterTestService.getChapterTestById(id).then( (user ) =>{
            res.send(user);
        })
        .catch(err => {
            res.status(500);
            res.send(err);
        }) 
    }
}

module.exports = UserChapterTestController;