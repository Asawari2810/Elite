import React,{Component} from 'react';
import {connect} from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import Sidebar from "../../src/components/Sidebar/Sidebar.jsx";
import image from '../../src/assets/img/sidebar-2.jpg';
import logo from "../../src/assets/img/logo-white.svg";
import withStyles from "@material-ui/core/styles/withStyles";
import dashboardStyle from "../../src/assets/jss/material-dashboard-pro-react/layouts/dashboardStyle.jsx";


class UserDashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            miniActive : false
        }
    }

    sidebarMinimize() {
        this.setState({ miniActive: !this.state.miniActive });
      }

    render(){
        const {classes,...rest} = this.props;
        return(
            <div className = {classes.wrapper}>
                <Sidebar
                    logoText = {"Creative Tim"}
                    logo = {logo}
                    image = {image}
                    color = "white"
                    bgColor = "blue"
                    miniActive = {this.state.miniActive}
                    {...rest}
                
               />
                <p> hello{this.props.user.userName}</p>
            </div>



        )
    }
}

UserDashboard.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
      user: state.user.userDetails
    }
  }

export default compose(
    withStyles(dashboardStyle),
    connect(mapStateToProps, null)
)(UserDashboard);