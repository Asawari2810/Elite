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
}

module.exports = GroupService;