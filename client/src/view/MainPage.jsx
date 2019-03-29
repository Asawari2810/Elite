import React,{Component} from 'react';
import Button from '../../src/components/CustomButtons/Button.jsx';
import Proptypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import buttonsStyle from "../../src/assets/jss/material-dashboard-pro-react/views/buttonsStyle.jsx";
import SendIcon from '@material-ui/icons/Send';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import {Link} from 'react-router-dom';
import bgImage from "../../src/assets/img/register.jpeg";
//import {Fingerprint} from '@material-ui/icons';

class MainPage extends Component{
    render(){
        const {classes} = this.props;
        return(
            <div className = {classes.content}>
             <div className={classes.fullPage}>
             <GridContainer justify="center">
                    <GridItem xs={15} sm={6} md={4}>
                    <Link to= {"/login"}>
                    <Button color="primary" round className={classes.button} >
                    Login
                    </Button>
                    </Link>
                    <Link to={"/register"}>
                    <Button color="primary" round>SignUp</Button>
                    </Link>

                    </GridItem>
            </GridContainer>
            <div 
            className = {classes.fullPageBackground}
            style = {{backgroundImage : "url (" + bgImage + ")"}}>

            </div>

            </div>
            </div>
        );
    }
}


MainPage.propTypes = {
    classes : Proptypes.object.isRequired
}

export default withStyles(buttonsStyle)(MainPage);