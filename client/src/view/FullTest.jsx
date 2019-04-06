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
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';

import {fetchFullTestSubmitScore}  from '../actions/fullTestSubmitScore.action';
import {fetchFullTest}  from '../actions/fullTest.action';


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
class FullTest extends Component {

    constructor(props) {
        super(props);
        this.state = {

            currentPage: 1,
            questionsPerPage: 10,
            value: "",
            selectedValue: [],
            totalScore: 0,
            time: {}, 
            seconds: 5 

        };
        // this.timer = 0;
        // this.startTimer = this.startTimer.bind(this);
        //this.countDown = this.countDown.bind(this);
        //this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // secondsToTime(secs){
    //     let hours = Math.floor(secs / (60 * 60));
    
    //     let divisor_for_minutes = secs % (60 * 60);
    //     let minutes = Math.floor(divisor_for_minutes / 60);
    
    //     let divisor_for_seconds = divisor_for_minutes % 60;
    //     let seconds = Math.ceil(divisor_for_seconds);
    
    //     let obj = {
    //       "h": hours,
    //       "m": minutes,
    //       "s": seconds
    //     };
    //     return obj;
    //   }
    
    handleClick(event) {

        var selectedAnswer = [...this.state.selectedValue];
        for (var i = 0; i < selectedAnswer.length; i++) {
            console.log("previous selection" + selectedAnswer[i].questionId);
        }
        //this.setState({selectedValue : selectedAnswer});
        // this.setState({
        //     currentPage: Number(event.target.id)
        // })
    }

    handleChange(event, questionId, correctAnswer) {
        const updateAnswers = [];
        updateAnswers.push({
            questionId: questionId,
            selectedAnswer: event.target.value,
            correctAnswer: correctAnswer
        });

        this.setState({
            selectedValue: [...this.state.selectedValue, ...updateAnswers]
        })
    };

    handleSubmit(event) {
        var finalScore = 0;
        const selectedAns = [...this.state.selectedValue];

           
            for (var i = 0; i < selectedAns.length; i++) {
                if (selectedAns[i].selectedAnswer === selectedAns[i].correctAnswer) {
                    finalScore++;
                }
            }
    
            this.setState({ totalScore: finalScore })
    
            const { id } = this.props.match.params;
            const { subId } = this.props.match.params;
            {
    
            }
            this.props.fetchFullTestSubmitScore(subId,id,finalScore,selectedAns,this.props.history);
        }
        
    

    componentDidMount() {
        
        // let timeLeftVar = this.secondsToTime(this.state.seconds);
        // this.setState({ time: timeLeftVar });
        console.log("componet did mount full test"+this.props.match.params);
        this.props.fetchFullTest(this.props.match.params, this.props.history);
    }

    // startTimer() {
    //     if (this.timer == 0 && this.state.seconds > 0) {
    //       this.timer = setInterval(this.countDown, 1000);
    //     }
    //   }
    
    //   countDown() {
    //     // Remove one second, set state so a re-render happens.
    //     let seconds = this.state.seconds - 1;
    //     this.setState({
    //       time: this.secondsToTime(seconds),
    //       seconds: seconds,
    //     });
        
    //     // Check if we're at zero.
    //     if (seconds == 0) { 
    //       clearInterval(this.timer);
    //     }
    //   }

    render() {

        const {
            classes,
            fullTestDetails,
            fullTestLoading,
            fullTestError
        } = this.props;

        const {
            // fullTestQuestions,
            currentPage,
            questionsPerPage
        } = this.state;

        if (fullTestLoading && !fullTestDetails.length) {
            return (
                <div>
                    <div><h6>Loading</h6></div>
                    <CircularProgress className={classes.progress} /></div>
            )
        }

        if (fullTestError && !fullTestDetails.length) {
            return (
                <div><h6>Hard luck</h6></div>
            )
        }

        if (fullTestDetails && fullTestDetails.length) {

            // console.log("inside pagination loop")
            // // this.setState({fullTestQuestions : fullTestDetails})
            // const fullTestQuestions = fullTestDetails;
            // const indexOfLastQuestion = currentPage * questionsPerPage;
            // console.log(indexOfLastQuestion);
            // const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
            // console.log(indexOfFirstQuestion);
            // const currentQuestion = fullTestQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion);
            // console.log(currentQuestion);
            
            // const pageNumbers = [];
            // for (let i = 1; i <= Math.ceil(fullTestQuestions.length / questionsPerPage); i++) {
            //     pageNumbers.push(i);
            // }

            // const renderPageNumbers = pageNumbers.map(number => {
            //     return (
            //         <ul
            //             key={number}
            //             id={number}
            //             onClick={this.handleClick}
            //         >
            //             {number}
            //         </ul>
            //     );
            // });

            return (
                <div>
                    <Grid container >
                        {fullTestDetails.map((question, index) => {
                            return (
                                <div >
                                    {/* <Link to={`/fullTest/${testLink.test_id}`}> */}
                                    <Card >
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography>
                                                    {question.question_id}
                                                </Typography>
                                                <Typography>
                                                    {question.title}
                                                </Typography>
                                                <Typography>
                                                    <FormControl component="fieldset" className={classes.formControl}>

                                                        <RadioGroup
                                                            aria-label="Gender"
                                                            name="gender1"
                                                            className={classes.group}
                                                            // value={this.state.value}
                                                            onChange={(event, questionId, correctAnswer) => this.handleChange(event, question.question_id, question.answer)}

                                                        >

                                                            <FormControlLabel value={question.option1} control={<Radio />} label={question.option1} />
                                                            <FormControlLabel value={question.option2} control={<Radio />} label={question.option2} />
                                                            <FormControlLabel value={question.option3} control={<Radio />} label={question.option3} />
                                                            <FormControlLabel value={question.option4} control={<Radio />} label={question.option4} />
                                                        </RadioGroup>
                                                    </FormControl>


                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>

                                    {/* </Link> */}
                                </div>
                            );
                        })}


                    </Grid>


                    {/* {renderPageNumbers} */}

                    <Link to={`/fullTestSubmitScore`}>
                    <input type="button" value="Submit" onClick={this.handleSubmit} />
                    </Link>
                </div>
            );

        }

        return (
            <div></div>
        )
    }
}



const mapStateToProps = (state) => {	
    return {
        fullTestDetails: state.fullTest.fullTestDetails,
        fullTestLoading: state.fullTest.fullTestLoading,
        fullTestError: state.fullTest.fullTestError
    }
}
    
const mapDispatchToProps = (dispatch) => {
    return {
        fetchFullTest: (test_id,history) => dispatch(fetchFullTest(test_id,history)),
        fetchFullTestSubmitScore: (subject_id,test_number,score,selectedAnswers,history) => dispatch(fetchFullTestSubmitScore(subject_id,test_number,score,selectedAnswers,history)),
    }
}

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(FullTest);