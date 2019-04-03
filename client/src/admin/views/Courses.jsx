import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {  fetchCourses } from '../admin.action';
import Card from "../../components/Card/Card.jsx";
import CardBody from '../../components/Card/CardBody.jsx';
import CardHeader from "../../components/Card/CardHeader.jsx";
import { Link} from 'react-router-dom';
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
});
class Courses extends Component {

    componentDidMount() {
        this.props.fetchCourses(this.props.history);
    }

    render() {

        const {
            classes,
            coursesList,
            coursesLoading,
            coursesError
        } = this.props;

        if (coursesLoading && !coursesList.length) {
            return (
                <div>
                    <div><h6>Loading</h6></div>
                    <CircularProgress className={classes.progress} /></div>
            )
        }

        if (coursesError && !coursesList.length) {
            return (
                <div><h6>Hard luck</h6></div>
            )
        }

        // if(coursesList && coursesList.courses) {
        //     return(
        //     coursesList.courses.map((data,index) => {
        //         return (
        //             <div >
        //                 <h1>{data.name}</h1>
        //             </div>
        //         )
        //     })
        // )
        // }

        return (
            coursesList.map((data, index) => {
                return (
                    <div >
                        <Card login>
                            <CardHeader
                                className={`${classes.cardHeader} ${classes.textCenter}`}
                                color="rose"
                            >
                                <h2 className={classes.cardTitle}> {data.name}</h2>
                            </CardHeader>
                            <CardBody>
                                
                                    {data.subjects.map((subject, index) => {
                                        return (
                                            <div>
                                                <Typography>
                                                <label><h4>{subject.name}</h4></label>
                                                <Link to='/ModalPaper'>
                                                    <h4>Modal Paper</h4>
                                                </Link>
                                                <Link to='/ChapterTest'>
                                                    <h4>Chapter Test</h4>
                                                </Link>
                                                <Link to='/FullTest'>
                                                    <h4>Full Test</h4>
                                                </Link>

                                                </Typography>
                                            </div>
                                        )
                                    })}
                                
                                
                            </CardBody>
                        </Card>
                    </div>
                )
            })
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
    }
}

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(Courses);