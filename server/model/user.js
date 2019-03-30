class User{
    constructor(obj){
        this.id = obj && obj.id ? obj.id : null;
        this.firstName = obj && obj.first_name ? obj.first_name : null;
        this.lastName = obj && obj.last_name ? obj.last_name : null;
        this.mobileNo = obj && obj.mobile_no ? obj.mobile_no : null;
        this.email = obj && obj.email ? obj.email : null;
        this.role = obj && obj.role ? obj.role : null;
        this.isVerified = obj && obj.is_verified ? (obj.is_verified == 1) ? true : false : false;

    }
}

module.exports = User;