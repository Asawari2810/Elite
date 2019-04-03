const userFullTestService = require('../service/userFullTestService');

class UserFullTestController {

    static submitFullTest(req,res){
        let userId  = req.body['appUser']['id'];
        delete req.body['appUser'];
        let payload = req.body;
        payload.user_id = userId;
         console.log("payload----", payload)
        userFullTestService.submitFullTest(payload).then( (user) => {
            res.send(user)
        })
        .catch(err => {
            res.status(500);
            res.send(err)
        })
    }

    static getFullTestById(req,res){
        let id = req.params['userFullTest']
        userFullTestService.getFullTestById(id).then( (user ) =>{
            res.send(user);
        })
        .catch(err => {
            res.status(500);
            res.send(err);
        }) 
    }
}

module.exports = UserFullTestController;