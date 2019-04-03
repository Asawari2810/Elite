import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { TextField, Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchCourses, addCourse } from '../admin.action';
import Card from "../../components/Card/Card.jsx";
import CardBody from '../../components/Card/CardBody.jsx';
import CardHeader from "../../components/Card/CardHeader.jsx";
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    progress: {
        margin: theme.spacing.unit * 2,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
});
class Courses extends Component {

    state = {
        addCourse: false,
        course_name: null
    }

    componentDidMount() {
        this.props.fetchCourses(this.props.history);
    }

    handleAddCourse = () => {
        this.setState({ addCourse: true })
    }

    handleSubmitCourse = () => {
        let values = {
            course_name: this.state.course_name
        }
        this.props.addCourse(values, this.props.history);
    }

    render() {

        const {
            classes,
            coursesList,
            coursesLoading,
            coursesError
        } = this.props;

        return (
            <div>
                {
                    this.state.addCourse 
                    ?
                    (<div>
                        <TextField
                                    id="course_name"
                                    label="Title"
                                    className={classes.textField}
                                    type="text"
                                    name="course_name"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={(e) => this.setState({ course_name: e.target.value})}
                        />
                        <Button className={classes.button} variant="contained" color="primary" onClick={this.handleSubmitCourse}>
                            Submit
                        </Button>
                    </div>) :
                    (<div>
                        <Button variant="contained" color="primary" onClick={this.handleAddCourse}>
                            Add New Course
                        </Button>
                    </div>)
                }


                {coursesLoading ? <CircularProgress className={classes.progress} /> : null}
                {coursesError ? <div><h6>Hard luck</h6></div> : null}
                {coursesList.length>0 ? 
                <div>
                    <h4>All Courses</h4>
                    {
                        coursesList.map((data, index) => {
                            return (
                                <div >
                                    <Card login>
                                        <CardHeader
                                            className={`${classes.cardHeader} ${classes.textCenter}`}
                                        >
                                            <h2 className={classes.cardTitle}> {data.courseName}</h2>
                                        </CardHeader>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>: null}
            </div>
        )

    }
}



const mapStateToProps = (state) => {
    return {
        coursesList: state.admin.coursesList,
        coursesLoading: state.admin.coursesLoading,
        coursesError: state.admin.coursesError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCourses: (history) => dispatch(fetchCourses(history)),
        addCourse: (values, history) => dispatch(addCourse(values, history))
    }
}

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(Courses);