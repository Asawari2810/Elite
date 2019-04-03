const DB = require('../util/db');
const UserChapterTest = require('../model/userChapterTest');

class UserChapterTestService {
    static submitChapterTest(payload) {
        return new Promise((resolve, reject) => {
            var connection;
            var insertedId;
            DB.getConnection().then(conn => {
                connection = conn;
                return DB.beginTransaction(connection);
            })
            .then(() => {
                payload = DB.addAttributesForNew(payload);
                connection.query(
                    `INSERT INTO user_chapter_test SET ?`, payload, (err, data) => {
                        if (err) {
                            DB.rollbackTransaction(connection);
                            DB.release(connection);
                            reject(err);
                        } else {
                            insertedId = data.insertId;
                            DB.commitTransaction(connection).then(() => {
                                UserChapterTestService.getChapterTestById(insertedId).then(user => {
                                    resolve(user);
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

    static getChapterTestById(id) {
        return new Promise((resolve, reject) => {
            var connection;
            DB.getConnection().then((conn) => {
                connection = conn;
                connection.query('select * from user_chapter_test where id = ? ', [id], (err, data) => {
                    DB.release(connection);
                    if (err) {
                        reject(err);
                    } else {
                        let user = {};
                        if (data && data.length > 0) {
                            user = new UserChapterTest(data[0]);
                        }
                        resolve(user);
                    }
                })
            })
        })
    }
}

module.exports = UserChapterTestService