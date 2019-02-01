import React, { Component } from 'react';
import Proptypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Email, LockOutlined} from "@material-ui/icons";
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
import { signUp } from '../actions/auth.jsx';
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
        const { classes, userLoading } = this.props;
        return (
            <div className={classes.container}>
            <div className={classes.content}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={6} md={4}>
                        <Formik

                            initialValues={{
                                firstName: '',
                                lastName: '',
                                signUpEmail: '',
                                password: '',
                                confirmPassword: ''
                            }}
                            validationSchema={registrationSchema}
                            onSubmit={values => {
                                console.log(values)
                                this.setState({firstName : values.firstName})
                                this.setState({lastName : values.lastName})
                                this.setState({signUpEmail : values.signUpEmail})
                                this.setState({password : values.password})
                                this.setState({confirmPassword : values.confirmPassword})
                                this.props.signUp(this.state, this.props.history)
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
                                            labelText="FirstName"
                                            name="firstName"
                                            id="firstName"
                                            value={values.firstName}
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
                                            labelText="LastName"
                                            name="lastName"
                                            id="lastName"
                                            value={values.lastName}
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
                                            name="signUpEmail"
                                            id="signUpEmail"
                                            value={values.signUpEmail}
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
                                        <div>{errors.firstName}</div>
                                        <div>{errors.lastName}</div>
                                        <div>{errors.signUpEmail}</div>
                                        <div>{errors.password}</div>
                                        <div>{errors.confirmPassword}</div>
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
    firstName: Yup.string().required('Please enter FirstName'),
    lastName: Yup.string().required('Please enter LastName'),
    signUpEmail: Yup.string().email('Invalid Email').required('Please enter Email id'),
    password: Yup.string().min(2, 'Password length is too small').required('Please enter Password'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'),null], "Passwords must match").required('Password is required')
})

const mapStateToProps = state => {
    return{

    }
}
const mapDispatchToProps = dispatch => {
    return {
        signUp : (values,history) => dispatch(signUp(values,history))
    }
}

export default compose(
    withStyles(registrationPageStyle),
    connect(mapStateToProps,mapDispatchToProps)
)(RegistrationPage);