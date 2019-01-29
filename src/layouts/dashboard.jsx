import React,{Component} from 'react';
import dashboardRoutes from "../routes/dashboard.jsx";
import {Route, Switch ,Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import pagesStyle from "../assets/jss/material-dashboard-pro-react/layouts/pagesStyle.jsx";

class Dashboard extends Component {

    render(){
       const  {classes} = this.props;
        return(
            <div>
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

export default withStyles(pagesStyle)(Dashboard);