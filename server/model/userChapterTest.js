class UserChapterTest {

    constructor(obj){
        this.id = obj && obj.id ? obj.id : null;
        this.userId = obj && obj.user_id ? obj.user_id : null;
        this.chapterId = obj && obj.chapter_id ? obj.chapter_id : null;
        this.scoredMarks = obj && obj.scored_marks ? obj.scored_marks : null;
        this.totalMarks = obj && obj.total_marks ? obj.total_marks : null;
        this.createDate = obj && obj.create_date ? obj.create_date : null;
        this.updateDate = obj && obj.update_date ? obj.update_date : null;
        this.createdBy = obj && obj.created_by ? obj.created_by : null;
        this.updatedBy = obj && obj.updated_by ? obj.updated_by : null;
    }
}

module.exports = UserChapterTest;