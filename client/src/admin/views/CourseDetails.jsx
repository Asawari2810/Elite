import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { TextField, Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchGroups, addCourse } from '../admin.action';
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
class CourseDetails extends Component {

componentDidMount() {
    const { course_id } = this.props.match.params;
    this.props.fetchGroups(course_id, this.props.history);
}

render() {

    const { course_id } = this.props.match.params;

    return(
        <div><p>mskmksd</p></div>
    )
}
}


const mapStateToProps = (state) => {
    return {
        groupsList: state.admin.groupsList,
        groupsLoading: state.admin.groupsLoading,
        groupsError: state.admin.groupsError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGroups: (history) => dispatch(fetchGroups(history)),
        addCourse: (values, history) => dispatch(addCourse(values, history))
    }
}

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(CourseDetails);