import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ModalList from '../components/ModalList';

import { fetchModalPaperList } from '../actions/modalPaper.action';

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
class ModalPaperList extends Component {

    componentDidMount() {
        this.props.fetchModalPaperList("1", this.props.history);
    }

    render() {

        const {
            classes,
            modalList,
            modalListLoading,
            modalListError
        } = this.props;

        if(modalListLoading &&  !modalList.length) {
            return(
                <CircularProgress className={classes.progress} />
            )
        } 

        if(modalListError && !modalList.length) {
            return(
                <div><h6>Hard luck</h6></div>
            )
        }

        return (
            <div >
                {modalList.isPurchased? 
                    <ModalList 
                        data = {modalList}
                        history = {this.props.history}
                    />:
                    <div><h6>Please purchase</h6></div>
                }
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        modalList: state.modal.modalList,
        modalListLoading: state.modal.modalListLoading,
        modalListError: state.modal.modalListError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchModalPaperList: (subject_id, history) => dispatch(fetchModalPaperList(subject_id, history)),
    }
}

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps)) (ModalPaperList);