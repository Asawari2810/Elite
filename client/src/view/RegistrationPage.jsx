import React, { Component } from 'react';
import Proptypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import CustomInput from "../components/CustomInput/CustomInput.jsx";
import Button from '../components/CustomButtons/Button.jsx';
import Card from "../components/Card/Card.jsx";
import CardBody from '../components/Card/CardBody.jsx';
import registrationPageStyle from "../assets/jss/material-dashboard-pro-react/views/registerPageStyle.jsx";
import { register } from '../actions/auth.jsx';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import CardHeader from "../components/Card/CardHeader.jsx";

class RegistrationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = (values, history) => {
        let value = {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            password: values.password,
            mobile_no: values.mobile_no,
            role: 'user',
           // isActive: 0
        }
        this.props.signUp(value, history)

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.content}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={6} md={4}>
                            <Formik

                                initialValues={{
                                    first_name: '',
                                    last_name: '',
                                    email: '',
                                    password: '',
                                    mobile_no: null,
                                    confirmPassword: ''
                                }}
                                validationSchema={registrationSchema}
                                onSubmit={values => {
                                    this.handleSubmit(values, this.props.history)
                                }}
                                render={({ handleSubmit, handleChange, values, errors, touched }) => (

                                    <Card register>
                                        <CardHeader
                                            className={`${classes.cardHeader} ${classes.textCenter}`}
                                            color="rose"
                                        >
                                            <h4 className={classes.cardTitle}>Sign Up</h4>
                                        </CardHeader>
                                        <CardBody>

                                            <CustomInput
                                                onChange={handleChange}
                                                labelText="First Name"
                                                name="first_name"
                                                id="first_name"
                                                value={values.first_name}
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            />
                                            {errors.first_name && touched.first_name ? (
                                <div style={{ color: "red" }}>{errors.first_name}</div>
                            ) : null}
                                            <CustomInput
                                                onChange={handleChange}
                                                labelText="Last Name"
                                                name="last_name"
                                                id="last_name"
                                                value={values.last_name}
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            />
                                                {errors.last_name && touched.last_name ? (
                                <div style={{ color: "red" }}>{errors.last_name}</div>
                            ) : null}
                                            <CustomInput
                                                onChange={handleChange}
                                                labelText="Email"
                                                name="email"
                                                id="email"
                                                value={values.email}
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: 'email'
                                                }}
                                            />
                                            {errors.email && touched.email ? (
                                <div style={{ color: "red" }}>{errors.email}</div>
                            ) : null}
                                            <CustomInput
                                                onChange={handleChange}
                                                labelText="Mobile"
                                                name="mobile_no"
                                                id="mobile_no"
                                                value={values.mobile_no}
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                               
                                            />
                                            {errors.mobile_no && touched.mobile_no ? (
                                <div style={{ color: "red" }}>{errors.mobile_no}</div>
                            ) : null}
                                            <CustomInput
                                                labelText="Password"
                                                onChange={handleChange}
                                                name="password"
                                                id="password"
                                                value={values.password}
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type:"password"
                                                }}
                                            />
                                            {errors.password && touched.password ? (
                                <div style={{ color: "red" }}>{errors.password}</div>
                            ) : null}
                                            <CustomInput
                                                labelText="Confirm Password"
                                                onChange={handleChange}
                                                name="confirmPassword"
                                                id="confirmPassword"
                                                value={values.confirmPassword}
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type:"password"
                                                }}
                                            />
                                            {errors.confirmPassword && touched.confirmPassword ? (
                                <div style={{ color: "red" }}>{errors.confirmPassword}</div>
                            ) : null}
                                            <div>
                                            </div>
                                            <div className={classes.textCenter}>

                                                <Button color="rose" onClick={handleSubmit}>
                                                    Sign Up
                                        </Button>

                                            </div>
                                        </CardBody>

                                    </Card>
                                )}>
                            </Formik>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        );
    }
}

RegistrationPage.propTypes = {
    classes: Proptypes.object.isRequired
};

const registrationSchema = Yup.object().shape({
    first_name: Yup.string().required('Please enter First Name'),
    last_name: Yup.string().required('Please enter Last Name'),
   // mobile_no: Yup.number().min(10, 'Please enter 10 digits').max(10, 'Please enter 10 digits'),
    email: Yup.string().email('Invalid Email').required('Please enter Email id'),
    password: Yup.string().min(2, 'Password length is too small').required('Please enter Password'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords must match").required('Password is required')
})

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        signUp: (values, history) => dispatch(register(values, history))
    }
}

export default compose(
    withStyles(registrationPageStyle),
    connect(mapStateToProps, mapDispatchToProps)
)(RegistrationPage);