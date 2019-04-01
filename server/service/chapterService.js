const DB = require('../util/db');
const Chapter = require('../model/chapter');

class ChapterService {

    static addChapter(chapter) {
        return new Promise((resolve, reject) => {
            var connection;
            var insertedId;
            DB.getConnection().then(conn => {
                connection = conn;
                return DB.beginTransaction(connection);
            })
                .then(() => {
                    chapter = DB.addAttributesForNew(chapter);
                    connection.query(
                        `INSERT INTO chapter SET ?`, chapter, (err, data) => {
                            if (err) {
                                DB.rollbackTransaction(connection);
                                DB.release(connection);
                                reject(err);
                            } else {
                                insertedId = data.insertId;
                                DB.commitTransaction(connection).then(() => {
                                    ChapterService.getChapterByID(insertedId).then(chapter => {
                                        resolve(chapter);
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

    static getChapterByID(id) {
        return new Promise((resolve, reject) => {
            var connection;
            DB.getConnection().then((conn) => {
                connection = conn;
                connection.query('select * from chapter where id = ? ', [id], (err, data) => {
                    DB.release(connection);
                    if (err) {
                        reject(err);
                    } else {
                        let chapter = {};
                        if (data && data.length > 0) {
                            chapter = new Chapter(data[0]);
                        }
                        resolve(chapter);
                    }
                })
            })
        })
    }

}

module.exports = ChapterService;