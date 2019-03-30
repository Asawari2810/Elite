class Subject {
    constructor(obj){
        this.id = obj && obj.id ? obj.id : null;
        this.groupId = obj && obj.group_id ? obj.group_id : null; 
        this.subjectName = obj && obj.subject_name ? obj.subject_name : null;  
        this.createDate = obj && obj.create_date ? obj.create_date : null;
        this.updateDate = obj && obj.update_date ? obj.update_date : null;
        this.createdBy = obj && obj.created_by ? obj.created_by : null;
        this.updatedBy = obj && obj.updated_by ? obj.updated_by : null;        
    }
}

module.exports = Subject;


