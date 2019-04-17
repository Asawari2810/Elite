const userService = require('../service/userService');
const sgMail = require('@sendgrid/mail');

class userController{

    static getUserById(id){    
    }

    static sendMail(req, res) {
        sgMail.setApiKey('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');
        const msg = {
        to: 'surbhiairan1@gmail.com',
        from: 'surbhiairan@gmail.com',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        };
        sgMail.send(msg);
        res.send("All ok")
    }

    static addUser(req,res){
        let user = req.body;
        userService.addUser(user).then((data) => {
            if(data){
                res.send(data);
            }
        }).catch(err =>{
            res.status(500);
            res.json(err);
        })
    }

    static authUser(req,res){
        let user = req.body;
        userService.authUser(user).then((data) => {
            if(data){
                res.send(data);
            }
        }).catch(err =>{
           switch (err) {
                case 'INVALID_EMAIL':
                    res.status(401);
                    res.send('INVALID_EMAIL');                    
                   break;
                case 'INVALID_PASSWORD':
                    res.status(401);
                    res.send('INVALID_PASSWORD');
                   break;           
                default:
                    res.status(500);
                    res.send(err);
                   break;
           }
        });
    }

    static resetPass(req,res){
        let user = req.body;
        userService.resetPass(user).then( data =>{
            res.json(data);
        }).catch(err =>{
            res.status(500);
            res.send(err);
        });

    }

    static sendResetPassLink(req,res){
        let user = req.body;
        userService.sendResetPassLink(user).then( data =>{
            res.json(data);
        }).catch(err =>{
            res.status(500);
            res.send(err);
        });

    }

    static activateUser(req,res){
        let userId = req.params['userId'];
        userService.activateUser(userId).then( user =>{
            res.send(user);
        }).catch( err =>{
            res.status(500);
            res.send(err);
        });
    }

    static getAllUser(req,res){
        userService.getAllUser().then( user =>{
            res.send(user);
        }).catch( err =>{
            res.status(500);
            res.send(err);
        });
    }

    static revokeRights(req,res){
        let userId = req.body['user_id']
        userService.revokeRights(userId).then( user =>{
            res.send(user);
        }).catch( err =>{
            res.status(500);
            res.send(err);
        });
    }

    static adminApprove(req,res){
        let userId = req.body['user_id']
        userService.adminApprove(userId).then( user =>{
            res.send(user);
        }).catch( err =>{
            res.status(500);
            res.send(err);
        });
    }
    


}



module.exports = userController;