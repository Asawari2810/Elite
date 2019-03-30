import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchGroups } from '../actions/groups.action';

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

        if(groupsLoading &&  !groupsDetails.length) {
            return(
                <CircularProgress className={classes.progress} />
            )
        } 

        if(groupsError && !groupsDetails.length) {
            return(
                <div><h6>Hard luck</h6></div>
            )
        }

        return (
            <div >
                <h1></h1>
            </div>
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

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps)) (Groups);