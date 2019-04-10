const DB = require('../util/db');
const Group = require('../model/group');

class GroupService {

    static addGroup(group) {
        return new Promise((resolve, reject) => {
            var connection;
            var insertedId;
            DB.getConnection().then(conn => {
                connection = conn;
                return DB.beginTransaction(connection);
            })
            .then(() => {
                group = DB.addAttributesForNew(group);
                connection.query(
                    `INSERT INTO course_group SET ?`, group, (err, data) => {
                        if (err) {
                            DB.rollbackTransaction(connection);
                            DB.release(connection);
                            reject(err);
                        } else {
                            insertedId = data.insertId;
                            DB.commitTransaction(connection).then(() => {
                                GroupService.getGroupByID(insertedId).then(group => {
                                    resolve(group);
                                })
                            })
                        }
                    });
            })
            .catch(err => {
                reject(err);
            })

        })
    }

    static getGroupByID(id) {
        return new Promise((resolve, reject) => {
            var connection;
            DB.getConnection().then((conn) => {
                connection = conn;
                connection.query('select * from course_group where id = ? ', [id], (err, data) => {
                    DB.release(connection);
                    if (err) {
                        reject(err);
                    } else {
                        let group = {};
                        if (data && data.length > 0) {
                            group = new Group(data[0]);
                        }
                        resolve(group);
                    }
                })
            })
        })
    }
    static getAllGroup() {
        return new Promise((resolve, reject) => {
            var connection;
            DB.getConnection().then((conn) => {
                connection = conn;
                connection.query('select * from course_group', [], (err, data) => {
                    DB.release(connection);
                    if (err) {
                        reject(err);
                    } else {
                        let groups;
                        if (data && data.length > 0) {
                            groups = data.map(item => {
                                let group;
                                group = new Group(item);
                                return group
                            })
                        } else {
                            groups = []
                        }
                        resolve(groups);
                    }
                })
            })
        })
    }

    static getSubjectAlongGroups() {
        return new Promise((resolve, reject) => {
            var connection, result, items;
            DB.getConnection().then((conn) => {
                connection = conn;
                connection.query(`select c.course_id, c.group_name, c.id group_id, s.id subject_id, s.subject_name 
                from course_group c inner join subject s on s.group_id = c.id`, [], (err, data) => {
                    DB.release(connection);
                    if (err) {
                        reject(err);
                    } else {
                        let groups = [];
                        console.log("data----", data)
                        // result = data.success.reduce(function (r, a) {
                        //     r[a.dish_category] = r[a.dish_category] || [];
                        //     r[a.dish_category].push(a);
                        //     return r;
                        // }, Object.create(null));
                    
                        // var ja = [];
                        // for( item in result) {
                        //     ja.push({
                        //         "category": item,
                        //         "dishes": result[item]
                        //     }) 
                        // }
                        if (data && data.length > 0) {
                            
                            groups = data.map(item => {
                                let group;
                                group = new Group(item);
                                delete group['id'];
                                group['subjectName'] = item['subject_name'];
                                group['subjectId'] = item['subject_id'];
                                group['groupId'] = item['group_id']
                                return group;
                            })
                           result = groups.reduce(function(r, a) {
                                console.log("r---", r)
                                r[a.groupId] = r[a.groupId] || [];
                                r[a.groupId].push(a);
                                return r;
                            }, Object.create(null))

                            var ja = [];
                        for( items in result) {
                            console.log(result[items][0].groupName, '--------')
                            ja.push({
                                "group": {
                                    groupId: result[items][0].groupId,
                                    groupName: result[items][0].groupName
                                },
                                "subjects": result[items]
                            }) 
                        }
                        } 
                        resolve(ja);
                    }
                })
            })
        })
    }

}

module.exports = GroupService;