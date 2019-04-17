import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchGroups } from '../actions/groups.action';
import Card from "../components/Card/Card.jsx";
import CardBody from '../components/Card/CardBody.jsx';
import CardHeader from "../components/Card/CardHeader.jsx";
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
});
class Groups extends Component {

    componentDidMount() {
        this.props.fetchGroups("1", this.props.history);
    }

    render() {

        const {
            classes,
            groupsDetails,
            groupsLoading,
            groupsError
        } = this.props;

        if (groupsLoading && !groupsDetails.length) {
            return (
                <div>
                    <div><h6>Loading</h6></div>
                    <CircularProgress className={classes.progress} /></div>
            )
        }

        if (groupsError && !groupsDetails.length) {
            return (
                <div><h6>Hard luck</h6></div>
            )
        }

        return (
            groupsDetails.map((data, index) => {
                return (
                    <div >
                        <Card login>
                            <CardHeader
                                className={`${classes.cardHeader} ${classes.textCenter}`}
                                color="rose"
                            >
                                <h2 className={classes.cardTitle}> {data.group.groupName}</h2>
                            </CardHeader>
                            <CardBody>
                                {data.subjects.map((subject, index) => {
                                    return (
                                        <div>
                                            <Typography>
                                                <label><h4>{subject.subjectName}</h4></label>
                                                <Link to={`/modalList/${subject.subjectId}`}>
                                                    <h4>Modal Paper</h4>
                                                </Link>
                                                <Link to='/ChapterTest'>
                                                    <h4>Chapter Test</h4>
                                                </Link>
                                                <Link to={`/fullTestList/${subject.subjectId}`}>
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
        groupsDetails: state.groups.groupsDetails,
        groupsLoading: state.groups.groupsLoading,
        groupsError: state.groups.groupsError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGroups: (course_id, history) => dispatch(fetchGroups(course_id, history)),
    }
}

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(Groups);