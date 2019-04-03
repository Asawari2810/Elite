class Question {
    constructor(obj){
        this.id = obj && obj.id ? obj.id : null;
        this.subjectId = obj && obj.subject_id ? obj.subject_id : null; 
        this.chapterId = obj && obj.chapter_id ? obj.chapter_id : null; 
        this.subjectId = obj && obj.subject_id ? obj.subject_id : null; 
        this.optionA = obj && obj.option_a ? obj.option_a : null;  
        this.optionB = obj && obj.option_b ? obj.option_b : null;
        this.optionC = obj && obj.option_c ? obj.option_c : null;
        this.optionD = obj && obj.option_d ? obj.option_d : null;
        this.correctAnswer = obj && obj.correct_answer ? obj.correct_answer : null;
        this.createDate = obj && obj.create_date ? obj.create_date : null;
        this.updateDate = obj && obj.update_date ? obj.update_date : null;
        this.createdBy = obj && obj.created_by ? obj.created_by : null;
        this.updatedBy = obj && obj.updated_by ? obj.updated_by : null;        
    }
}

module.exports = Question;


