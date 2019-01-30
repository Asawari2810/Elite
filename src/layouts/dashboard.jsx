import React,{Component} from 'react';
import dashboardRoutes from "../routes/dashboard.jsx";
import {Route, Switch ,Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import dashboardStyle from "../../src/assets/jss/material-dashboard-pro-react/layouts/dashboardStyle.jsx";
import Sidebar from "../../src/components/Sidebar/Sidebar.jsx";
import image from '../../src/assets/img/sidebar-2.jpg';
import logo from "../../src/assets/img/logo-white.svg";


class Dashboard extends Component {
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
       const  {classes,...rest} = this.props;
        return(
            <div className = {classes.wrapper}>
            <Sidebar
                    logoText = {"Elite Coaching Classes"}
                    routes = {dashboardRoutes}
                    logo = {logo}
                    image = {image}
                    color = "white"
                    bgColor = "blue"
                    miniActive = {this.state.miniActive}
                    {...rest}
                
               />
                <Switch>
                    {dashboardRoutes.map((props,key)=> {
                        // if(props.redirect){
                        //     return(
                        //         <Redirect from={props.path} to={props.pathTo} key={key} />
                        //     )
                        // }
                        return(
                            <Route path = {props.path} component={props.component} key={key}/>
                        );
                    })}
                </Switch>
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes : PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(Dashboard);