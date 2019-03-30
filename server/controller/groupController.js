const groupService = require('../service/groupService');

class GroupController {

    static addGroup(req,res){
        let payload  = req.body;
        groupService.addGroup(payload).then( (group) => {
            res.send(group)
        })
        .catch(err => {
            res.status(500);
            res.send(err)
        })
    }

    static getGroupByID(req,res){
        let id = req.params['groupId']
        groupService.getGroupByID(id).then( (group ) =>{
            res.send(group);
        })
        .catch(err => {
            res.status(500);
            res.send(err);
        }) 
    }
}

module.exports = GroupController;