import React,{Component} from 'react';
import { dashboardRoutes, otherRoutes } from "../routes/dashboard.jsx";
import {Route, Switch ,Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import dashboardStyle from "../../src/assets/jss/material-dashboard-pro-react/layouts/dashboardStyle.jsx";
import Sidebar from "../../src/components/Sidebar/Sidebar.jsx";
import image from '../../src/assets/img/sidebar-2.jpg';
import logo from "../../src/assets/img/logo-white.svg";
import PerfectScrollbar from 'perfect-scrollbar';
import cx from "classnames";
import Header from "../components/Header/Header.jsx";
import "perfect-scrollbar/css/perfect-scrollbar.css";

var ps;
class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            mobileOpen : false,
            miniActive : false
        }
    }

    componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.mainPanel, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if(this.state.mobileOpen){
        this.setState({mobileOpen: false})
      }
    }
  }
    getRoute() {
        return this.props.location.pathname !== "/maps/full-screen-maps";
    }

    handleDraweToggle = () =>{
        this.setState({mobileOpen : !this.state.mobileOpen});
    }

    sidebarMinimize() {
        this.setState({ miniActive: !this.state.miniActive });
    }

    render(){
       const  {classes,...rest} = this.props;
        const mainPanel =
            classes.mainPanel +
            " " +
            cx({
                [classes.mainPanelSidebarMini]: this.state.miniActive,
                [classes.mainPanelWithPerfectScrollbar]:
                    navigator.platform.indexOf("Win") > -1
            });
        return(
            <div className = {classes.wrapper}>
            <Sidebar
                    logoText = {"Elite"}
                    routes = {dashboardRoutes}
                    logo = {logo}
                    image = {image}
                    color = "white"
                    bgColor = "black"
                    open = {this.state.mobileOpen}
                    miniActive = {this.state.miniActive}
                    handleDraweToggle = {this.state.handleDraweToggle}
                    {...rest}
                
               />
                <div className={mainPanel} ref="mainPanel">
                     <Header
                        sidebarMinimize={this.sidebarMinimize.bind(this)}
                        miniActive={this.state.miniActive}  
                        routes={dashboardRoutes}
                        handleDrawerToggle={this.handleDrawerToggle}
                        {...rest}
                    />
               <div className = {classes.content}>
                <div className={classes.container}>
                    {switchRoutes}
                </div>
               </div>
               </div>
            </div>
        );
    }
}

const switchRoutes = (
    <Switch>
        {[...otherRoutes, ...dashboardRoutes].map((props,key) => {
            if(props.redirect){
                return <Redirect to={props.path} from={props.pathTo} key={key}/>;
            }
            if (props.collapse)
                return props.views.map((props, key) => {
                    return (
                        <Route path={props.path} component={props.component} key={key} />
                    );
                });
            return <Route path={props.path} component={props.component} key={key}/>
        })}
    </Switch>
);

Dashboard.propTypes = {
    classes : PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return{
        userName: state.user.userDetails
    } 
};

export default  withStyles(dashboardStyle)(Dashboard);   
