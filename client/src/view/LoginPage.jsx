import React, { Component } from 'react';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Email, LockOutlined } from "@material-ui/icons";
import { compose } from 'redux';
import { connect } from 'react-redux';
// import { ClipLoader } from 'react-spinners';
import { Formik } from 'formik';
import * as Yup from 'yup';

import CustomInput from "../components/CustomInput/CustomInput.jsx";
import Button from '../components/CustomButtons/Button.jsx';
import Card from "../components/Card/Card.jsx";
import CardBody from '../components/Card/CardBody.jsx';
import loginPageStyle from "../assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";
import { loginUser } from '../actions/auth.jsx';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import CardHeader from "../components/Card/CardHeader.jsx";

class LoginPage extends Component {
  moveToForgetPassword = () => {
    this.props.history.push('/forgotpassword')
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.content}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <Formik
              initialValues={{
                email: '',
                password: ''
              }}
              validationSchema={loginSchema}
              onSubmit={values => {
                this.props.loginUser(values, this.props.history)
              }}
              render={({ handleSubmit, handleChange, values, errors }) => (

                <Card login>
                  <CardHeader
                    className={`${classes.cardHeader} ${classes.textCenter}`}
                    color="rose"
                  >
                  <h4 className={classes.cardTitle}> Login</h4>
                  </CardHeader>
                    <CardBody>
                      <CustomInput  
                        onChange={handleChange}
                        labelText="Email..."
                        name="email"
                        id = "email"
                        value = {values.email}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          )
                        }}
                      />

                      <CustomInput
                        labelText="Password"
                        onChange={handleChange}
                        name="password"
                        id = "password"
                        value = {values.password}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <LockOutlined
                                className={classes.inputAdornmentIcon}
                              />
                            </InputAdornment> 
                          )
                        }}
                      />
                      <div className={classes.textCenter}>
                        
                        <Button color="rose"  round  onClick={handleSubmit}>
                          Login
                        </Button>
                       
                     
                        
                        <Button color="rose" round onClick={this.moveToForgetPassword}>
                          Forget Password
                        </Button>

                      </div>
                    </CardBody>
                  
                </Card>
              )}>
            </Formik>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
};

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Please enter email.'),
  password: Yup.string().min(4, 'Too short').required('Please enter password.')
});

const mapStateToProps = state => {
  return {
    userName: state.user.userDetails
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (values, history) => dispatch(loginUser(values, history))
  }
}

export default compose(
  withStyles(loginPageStyle),
  connect(mapStateToProps, mapDispatchToProps)
)(LoginPage);