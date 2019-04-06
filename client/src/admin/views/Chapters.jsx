import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { TextField, Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchChapters, addChapter } from '../admin.action';
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

class AdminSubjects extends Component {

state = {
    addChapter: false,
    course_name: null,
    subject_name: null,
}

componentDidMount() {
    const { subject_id } = this.props.match.params;
    this.props.fetchChapters(subject_id, this.props.history);
}

handleAddChapter = () => {
    this.setState({ addChapter: true })
}

handleSubmitChapter = (course_id) => {
    let values = {
        subject_name: this.state.subject_name,
        course_id: course_id
    }
    this.props.addChapter(values, this.props.history);
}

render() {

    const {
        classes,
        subjectsList,
        subjectsLoading,
        subjectsError
    } = this.props;

    const { course_id } = this.props.match.params;

    return (
        <div>
            {
                this.state.addChapter 
                ?
                (<div>
                    <TextField
                                id="subject_name"
                                label="Title"
                                className={classes.textField}
                                type="text"
                                name="subject_name"
                                margin="normal"
                                variant="outlined"
                                onChange={(e) => this.setState({ subject_name: e.target.value})}
                    />
                    <Button className={classes.button} variant="contained" color="primary" onClick={()=>this.handleSubmitChapter(course_id)}>
                        Submit
                    </Button>
                </div>) :
                (<div>
                    <Button variant="contained" color="primary" onClick={this.handleAddChapter}>
                        Add New Chapter
                    </Button>
                </div>)
            }


            {subjectsLoading ? <CircularProgress className={classes.progress} /> : null}
            {subjectsError ? <div><h6>Hard luck</h6></div> : null}
            {subjectsList.length>0 ? 
            <div>
                <h4>All Chapters</h4>
                {
                    subjectsList.map((data, index) => {
                        return (
                            <div >
                                <Card >
                                    <CardHeader onClick={() => this.onChapterClick(data.id)}
                                        className={`${classes.cardHeader} ${classes.textCenter}`}
                                    >
                                        <h2 className={classes.cardTitle}> {data.subjectName}</h2>
                                    <Link to={`/admin/chapter/${data.id}`}>
                                        Chapters
                                    </Link>
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
        subjectsList: state.admin.subjectsList,
        subjectsLoading: state.admin.subjectsLoading,
        subjectsError: state.admin.subjectsError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchChapters: (subject_id, history) => dispatch(fetchChapters(subject_id, history)),
        addChapter: (values, history) => dispatch(addChapter(values, history))
    }
}

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(AdminSubjects);