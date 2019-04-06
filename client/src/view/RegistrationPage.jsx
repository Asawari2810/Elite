import React, { Component } from 'react';
import Proptypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Email, LockOutlined } from "@material-ui/icons";
import { compose } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { ClipLoader } from 'react-spinners';
import { Formik } from 'formik';
import * as Yup from 'yup';
import bgimage from "../assets/img/register.jpeg";

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
                                    confirmPassword: ''
                                }}
                                validationSchema={registrationSchema}
                                onSubmit={values => {
                                    this.props.signUp(values, this.props.history)
                                }}
                                render={({ handleSubmit, handleChange, values, errors }) => (

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
                                                value={values.first_name}
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            // inputProps={{

                                            //     type: "text",
                                            //     endAdornment: (
                                            //         <InputAdornment position="end">
                                            //             <TextField className={classes.inputAdornmentIcon} />
                                            //         </InputAdornment>
                                            //     )
                                            // }}
                                            />
                                            <CustomInput
                                                onChange={handleChange}
                                                labelText="Last Name"
                                                name="last_name"
                                                value={values.last_name}
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            // inputProps={{

                                            //     type: "text",
                                            //     endAdornment: (
                                            //         // <InputAdornment position="end">
                                            //         //     <TextField className={classes.inputAdornmentIcon} />
                                            //         // </InputAdornment>
                                            //     )
                                            // }}
                                            />

                                            <CustomInput
                                                onChange={handleChange}
                                                labelText="Email"
                                                name="email"
                                                value={values.email}
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
                                                id="password"
                                                value={values.password}
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
    first_name: Yup.string().required('Please enter FirstName'),
    last_name: Yup.string().required('Please enter LastName'),
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