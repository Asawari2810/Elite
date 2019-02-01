import React,{Component} from 'react';
import authRoutes from "../routes/auth.jsx";
import dashboardRoutes from "../routes/dashboard.jsx";
import {Route, Switch ,Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import pagesStyle from "../assets/jss/material-dashboard-pro-react/layouts/pagesStyle.jsx";
import PageHeader from "../components/Header/PagesHeader.jsx"; 
import bgImage from "../assets/img/register.jpeg";

class Auth extends Component {

    render(){
       const  {classes,...rest} = this.props;
        return(
            <div>
            <PageHeader {...rest}/>
            <div className ={classes.wrapper} ref="wrapper">
                <div className={classes.fullPage}>
                <Switch>
                    {authRoutes.map((props,key)=> {
                        if(props.redirect){
                            return(
                                <Redirect from={props.path} to={props.pathTo} key={key} />
                            )
                        }

                        if(props.collapse){
                            return null;
                        }
                        return(
                            <Route path = {props.path} component={props.component} key={key}/>
                        );
                    })}
                </Switch>
                </div>
                <div 
                    className={classes.fullPageBackground}
                    style={{ backgroundImage: "url(" + bgImage + ")" }}/>
            </div>
            </div>
        );
    }
}

Auth.propTypes = {
    classes : PropTypes.object.isRequired
}

export default withStyles(pagesStyle)(Auth);