import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Card from "../components/Card/Card.jsx";
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';


const styles = theme => ({
        button: {
            margin: theme.spacing.unit,
        },
        input: {
            display: 'none',
        },
        progress: {
            margin: theme.spacing.unit * 2,
        }, card: {
            width: 345,
            margin:5
        }
});


class FullTestSubmitScore extends Component {

    render() {

          const {
            classes,
            fullTestSubmitScoreDetails,
            fullTestSubmitScoreLoading,
            fullTestSubmitScoreError
        } = this.props;

        if (fullTestSubmitScoreLoading && !fullTestSubmitScoreDetails) {
            return (
                <div>
                    <div><h6>Loading</h6></div>
                    <CircularProgress className={classes.progress} /></div>
            )
        }

        if (fullTestSubmitScoreError && !fullTestSubmitScoreDetails) {
            return (
                <div><h6>Hard luck</h6></div>
            )
        }

        return (
           <div>hiiiiiiiii  </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        fullTestSubmitScoreDetails: state.fullTestSubmitScore.fullTestSubmitScoreDetails,
        fullTestSubmitScoreLoading: state.fullTestSubmitScore.fullTestSubmitScoreLoading,
        fullTestSubmitScoreError: state.fullTestSubmitScore.fullTestSubmitScoreError
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchModalPaperList: (subject_id, history) => dispatch(fetchModalPaperList(subject_id, history)),
//     }
// }

export default compose(withStyles(styles), connect(mapStateToProps,null))(FullTestSubmitScore);
