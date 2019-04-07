const DB = require('../util/db');
const Subject = require('../model/subject');
const Chapter = require('../model/chapter');
class SubjectService {

    static addSubject(subject) {
        return new Promise((resolve, reject) => {
            var connection;
            var insertedId;
            DB.getConnection().then(conn => {
                connection = conn;
                return DB.beginTransaction(connection);
            })
                .then(() => {
                    subject = DB.addAttributesForNew(subject);
                    connection.query(
                        `INSERT INTO subject SET ?`, subject, (err, data) => {
                            if (err) {
                                DB.rollbackTransaction(connection);
                                DB.release(connection);
                                reject(err);
                            } else {
                                insertedId = data.insertId;
                                DB.commitTransaction(connection).then(() => {
                                    SubjectService.getSubjectByID(insertedId).then(subject => {
                                        resolve(subject);
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

    static getSubjectByID(id) {
        return new Promise((resolve, reject) => {
            var connection;
            DB.getConnection().then((conn) => {
                connection = conn;
                connection.query('select * from subject where id = ? ', [id], (err, data) => {
                    DB.release(connection);
                    if (err) {
                        reject(err);
                    } else {
                        let subject = {};
                        if (data && data.length > 0) {
                            subject = new Subject(data[0]);
                        }
                        resolve(subject);
                    }
                })
            })
        })
    }

    static getAllSubject() {
        return new Promise((resolve, reject) => {
            var connection;
            DB.getConnection().then((conn) => {
                connection = conn;
                connection.query('select * from subject', [], (err, data) => {
                    DB.release(connection);
                    if (err) {
                        reject(err);
                    } else {
                        let subjects;
                        if (data && data.length > 0) {
                            subjects = data.map(item => {
                                let subject;
                                subject = new Subject(item);
                                return subject
                            })
                        } else {
                            subjects = [];
                        }
                        resolve(subjects);
                    }
                })
            })
        })
    }

    static getChapterBySubjectID(id) {
        return new Promise((resolve, reject) => {
            var connection;
            DB.getConnection().then((conn) => {
                connection = conn;
                connection.query(`select * from chapter where subject_id = ? `, [id], (err, data) => {
                    DB.release(connection);
                    if (err) {
                        reject(err);
                    } else {
                        let chapters;
                        if (data && data.length > 0) {
                            console.log("here")
                            chapters = data.map(item => {
                                let chapter;
                                chapter = new Chapter(item);
                                return chapter
                            })
                        } else {
                            chapters = [];
                        }
                        resolve(chapters);
                    }
                })
            })
        })
    }
}

module.exports = SubjectService;