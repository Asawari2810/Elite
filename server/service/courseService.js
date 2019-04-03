const DB = require('../util/db');
const Course = require('../model/course');

class CourseService {

    static addCourse(course) {
        return new Promise((resolve, reject) => {
            var connection;
            var insertedId;
            DB.getConnection().then(conn => {
                connection = conn;
                return DB.beginTransaction(connection);
            })
                .then(() => {
                    course = DB.addAttributesForNew(course);
                    connection.query(
                        `INSERT INTO course SET ?`, course, (err, data) => {
                            if (err) {
                                DB.rollbackTransaction(connection);
                                DB.release(connection);
                                reject(err);
                            } else {
                                insertedId = data.insertId;
                                DB.commitTransaction(connection).then(() => {
                                    CourseService.getCourseByID(insertedId).then(course => {
                                        resolve(course);
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

    static getCourseByID(id) {
        return new Promise((resolve, reject) => {
            var connection;
            DB.getConnection().then((conn) => {
                connection = conn;
                connection.query('select * from course where id = ? ', [id], (err, data) => {
                    DB.release(connection);
                    if (err) {
                        reject(err);
                    } else {
                        let course = {};
                        if (data && data.length > 0) {
                            course = new Course(data[0]);
                        }
                        resolve(course);
                    }
                })
            })
        })
    }

}

module.exports = CourseService;