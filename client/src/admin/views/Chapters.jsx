import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { TextField, Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchChapters, addChapter, uploadFile } from '../admin.action';
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
    file: null,
    addChapter: false,
    chapter_name: null,
    chapter_name: null,
}

componentDidMount() {
    const { subject_id } = this.props.match.params;
    this.props.fetchChapters(subject_id, this.props.history);
}

handleAddChapter = () => {
    this.setState({ addChapter: true })
}

handleSubmitChapter = (subject_id) => {
    let values = {
        chapter_name: this.state.chapter_name,
        subject_id: subject_id
    }
    this.props.addChapter(values, this.props.history);
}

handleFileChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
      });
    };
    reader.readAsDataURL(file);
  }

uploadFileHandler = (subjectId, chapterId) => {
    console.log(this.state.file,"gilnlvndsv");
    let values = {
        file: this.state.file
    }
    this.props.uploadFile(subjectId, chapterId, values, this.props.history);
}

render() {

    const {
        classes,
        chaptersList,
        chaptersLoading,
        chaptersError
    } = this.props;

    const { subject_id } = this.props.match.params;

    return (
        <div>
            {
                this.state.addChapter 
                ?
                (<div>
                    <TextField
                                id="chapter_name"
                                label="Title"
                                className={classes.textField}
                                type="text"
                                name="chapter_name"
                                margin="normal"
                                variant="outlined"
                                onChange={(e) => this.setState({ chapter_name: e.target.value})}
                    />
                    <Button className={classes.button} variant="contained" color="primary" onClick={()=>this.handleSubmitChapter(subject_id)}>
                        Submit
                    </Button>
                </div>) :
                (<div>
                    <Button variant="contained" color="primary" onClick={this.handleAddChapter}>
                        Add New Chapter
                    </Button>
                </div>)
            }


            {chaptersLoading ? <CircularProgress className={classes.progress} /> : null}
            {chaptersError ? <div><h6>Hard luck</h6></div> : null}
            {chaptersList.length>0 ? 
            <div>
                <h4>All Chapters</h4>
                {
                    chaptersList.map((data, index) => {
                        return (
                            <div >
                                <Card >
                                    <CardHeader 
                                        className={`${classes.cardHeader} ${classes.textCenter}`}
                                    >
                                        <h2 className={classes.cardTitle}> {data.chapterName}</h2>
                                    </CardHeader>
                                    <input type="file" onChange={ e => this.handleFileChange(e)} ref="fileInput" />
                                    <Button onClick={()=>this.uploadFileHandler(subject_id, data.id)}>Upload Excel Sheet</Button>
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
        chaptersList: state.admin.chaptersList,
        chaptersLoading: state.admin.chaptersLoading,
        chaptersError: state.admin.chaptersError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchChapters: (subject_id, history) => dispatch(fetchChapters(subject_id, history)),
        addChapter: (values, history) => dispatch(addChapter(values, history)),
        uploadFile: (subjectId, chapterId, values, history) => dispatch(uploadFile(subjectId, chapterId, values, history))
    }
}

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(AdminSubjects);