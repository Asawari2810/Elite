import React,{Component} from 'react';
import {connect} from 'react-redux';
import Sidebar from "../../src/components/Sidebar/Sidebar.jsx";

class UserDashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            miniActive : false
        }
    }
    render(){

        return(
            <div>
                <p> hello{this.props.user.userName}</p>
            </div>



        )
    }
}

const mapStateToProps = state => {
    return {
      user: state.user.userDetails
    }
  }

export default connect(mapStateToProps,null)(UserDashboard);