const readXlsxFile = require('read-excel-file/node');

const DB = require('../util/db');
const Question = require('../model/question');

const schema = {
    'Question No.': {
        prop: 'question_no',
        type: String
    },
    'Questions': {
        prop: 'question',
        type: String
    },
    'Option a': {
        prop: 'option_a',
        type: String
    },
    'Option b': {
        prop: 'option_b',
        type: String
    },
    'Option c': {
        prop: 'option_c',
        type: String
    },
    'Option d': {
        prop: 'option_d',
        type: String
    },
    'Correct Answer': {
        prop: 'correct_answer',
        type: String
    }
}

class QuestionService {

    static addQuestion(question) {
        return new Promise((resolve, reject) => {
            //console.log("question----", question);

            readXlsxFile(question.file, schema)
                .then((rows) => {
                    // `rows` is an array of rows
                    // each row being an array of cells.
                    console.log("rows----", rows)
                    var connection;
                    var insertedId;
                    DB.getConnection().then(conn => {
                        connection = conn;
                        return DB.beginTransaction(connection);
                    })
                        .then(() => {
                            //subject = DB.addAttributesForNew(subject);
                            // connection.query(
                            //     `INSERT INTO question (question_no, question, option_a, option_b, option_c, option_d, correct_answer, subject_id, chapter_id) VALUES ?`, [rows], (err, data) => {
                            //         if (err) {
                            //             DB.rollbackTransaction(connection);
                            //             DB.release(connection);
                            //             reject(err);
                            //         } else {
                            //             insertedId = data.insertId;
                            //             DB.commitTransaction(connection).then(() => {
                            //                 console.log("data----", data)
                            //                 resolve(data)
                            //                 // SubjectService.getSubjectByID(insertedId).then(subject => {
                            //                 //     resolve(subject);
                            //                 // })
                            //              })
                                        
                            //         }
                            //     });
                        })
                        .catch(err => {
                            reject(err);
                        })
                    console.log("rows----", rows)
                    resolve(rows)
                })
        })

    }

    static getFullTest(subjectId, testId) {
        return new Promise((resolve, reject) => {
            var connection;
            DB.getConnection().then((conn) => {
                connection = conn;
                connection.query('select * from question where subject_id = ? ORDER BY RAND() LIMIT 10;', [subjectId], (err, data) => {
                    DB.release(connection);
                    if (err) {
                        reject(err);
                    } else {
                        let questions= []
                        if (data && data.length > 0) {
                            questions = data.map(item => {
                                let question;
                                question = new Question(item);
                                return question
                            })
                        }
                        resolve(questions);
                    }
                })
            })
        })
    }

    static getChapterTest(chapterId) {
        return new Promise((resolve, reject) => {
            var connection;
            DB.getConnection().then((conn) => {
                connection = conn;
                connection.query('select * from question where chapter_id = ? ', [chapterId], (err, data) => {
                    DB.release(connection);
                    if (err) {
                        reject(err);
                    } else {
                        let questions;
                        if (data && data.length > 0) {
                            console.log("data----", data)
                            questions = data.map(item => {
                                let question;
                                question = new Question(item);
                                return question;
                            })
                        } else {
                            questions = []
                        }
                        resolve(questions);
                    }
                })
            })
        })
    }

}

module.exports = QuestionService

