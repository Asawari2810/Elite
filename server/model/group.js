class Group {
    constructor(obj){
        this.id = obj && obj.id ? obj.id : null;
        this.courseId = obj && obj.course_id ? obj.course_id : null; 
        this.groupName = obj && obj.group_name ? obj.group_name : null;  
        this.createDate = obj && obj.create_date ? obj.create_date : null;
        this.updateDate = obj && obj.update_date ? obj.update_date : null;
        this.createdBy = obj && obj.created_by ? obj.created_by : null;
        this.updatedBy = obj && obj.updated_by ? obj.updated_by : null;        
    }
}

module.exports = Group;


