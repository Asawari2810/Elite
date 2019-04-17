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

const instructions =({
    text : "Please read the instructions carefully :",
    text1 : "1. This is a 60 minutes",
    text2 : "2. There are total 60 questions.",
    text3 : "3. This is a multiple choice questions test.",
    text4 : "4. The timer will start once you click the start test button."
}
)
class FullTestInstructions extends Component {

    render() {
        const {
            classes
        } = this.props;

        const { id } = this.props.match.params;
        const { subId } = this.props.match.params;

        return (
            <div>
               <Grid container >
                   
                            <div >
                                {/* <Link to={`/fullTest/${testLink.test_id}/${id}`}> */}
                               
                                <Card >
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" style={{ textTransform: 'capitalize' }}>
                                                {instructions.text}
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="h2" style={{ textTransform: 'capitalize' }}>
                                                {instructions.text1}
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="h2" style={{ textTransform: 'capitalize' }}>
                                                {instructions.text2}
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="h2" style={{ textTransform: 'capitalize' }}>
                                                {instructions.text3}
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="h2" style={{ textTransform: 'capitalize' }}>
                                                {instructions.text4}
                                                </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                {/* </Link> */}
                            </div>
                    
                   
                </Grid>
                 <Link to={`/fullTest/${id}/${subId}`}>
                <button>Start Test</button>
                </Link>
            </div>
        )
    }
}
export default (FullTestInstructions);