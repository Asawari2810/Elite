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

    static getAllGroup(req,res){
        let query = req.query['subject']
        console.log("query---", query);
        if(query) {
            groupService.getSubjectAlongGroups().then( (group ) =>{
                res.send(group);
            })
            .catch(err => {
                res.status(500);
                res.send(err);
            }) 
        } else {
            groupService.getAllGroup().then( (group ) =>{
                res.send(group);
            })
            .catch(err => {
                res.status(500);
                res.send(err);
            }) 
        }
    }

    // static getSubjectAlongGroups(req,res){
    //     let query = req.query['subjectId']
    //     console.log("query---", query)
    //     groupService.getSubjectAlongGroups().then( (group ) =>{
    //         res.send(group);
    //     })
    //     .catch(err => {
    //         res.status(500);
    //         res.send(err);
    //     }) 
    // }
}

module.exports = GroupController;