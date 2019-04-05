import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { TextField, Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchGroups, addGroup } from '../admin.action';
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
class Groups extends Component {

state = {
    addGroup: false,
    course_name: null,
    group_name: null,
}

componentDidMount() {
    const { course_id } = this.props.match.params;
    this.props.fetchGroups(course_id, this.props.history);
}

handleAddGroup = () => {
    this.setState({ addGroup: true })
}

handleSubmitGroup = (course_id) => {
    let values = {
        group_name: this.state.group_name,
        course_id: course_id
    }
    this.props.addGroup(values, this.props.history);
}

render() {

    const {
        classes,
        groupsList,
        groupsLoading,
        groupsError
    } = this.props;

    const { course_id } = this.props.match.params;

    return (
        <div>
            {
                this.state.addGroup 
                ?
                (<div>
                    <TextField
                                id="group_name"
                                label="Title"
                                className={classes.textField}
                                type="text"
                                name="group_name"
                                margin="normal"
                                variant="outlined"
                                onChange={(e) => this.setState({ group_name: e.target.value})}
                    />
                    <Button className={classes.button} variant="contained" color="primary" onClick={()=>this.handleSubmitGroup(course_id)}>
                        Submit
                    </Button>
                </div>) :
                (<div>
                    <Button variant="contained" color="primary" onClick={this.handleAddGroup}>
                        Add New Group
                    </Button>
                </div>)
            }


            {groupsLoading ? <CircularProgress className={classes.progress} /> : null}
            {groupsError ? <div><h6>Hard luck</h6></div> : null}
            {groupsList.length>0 ? 
            <div>
                <h4>All Groups</h4>
                {
                    groupsList.map((data, index) => {
                        return (
                            <div >
                                <Card >
                                    <CardHeader onClick={() => this.onGroupClick(data.id)}
                                        className={`${classes.cardHeader} ${classes.textCenter}`}
                                    >
                                        <h2 className={classes.cardTitle}> {data.groupName}</h2>
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
        groupsList: state.admin.groupsList,
        groupsLoading: state.admin.groupsLoading,
        groupsError: state.admin.groupsError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGroups: (history) => dispatch(fetchGroups(history)),
        addGroup: (values, history) => dispatch(addGroup(values, history))
    }
}

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(Groups);