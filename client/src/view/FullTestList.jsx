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

const fullTest = [
    {
        test_id: "1",
        name: "Full Test Link 1",
    },
    {
        test_id: "2",
        name: "Full Test Link 2",
    }, {
        test_id: "3",
        name: "Full Test Link 3",
    },
    {
        test_id: "4",
        name: "Full Test Link 4",
    },
    {
        test_id: "5",
        name: "Full Test Link 5",
    },
    {
        test_id: "6",
        name: "Full Test Link 6",
    },
    {
        test_id: "7",
        name: "Full Test Link 7",
    },
    {
        test_id: "8",
        name: "Full Test Link 8",
    },
    {
        test_id: "9",
        name: "Full Test Link 9",
    },
    {
        test_id: "10",
        name: "Full Test Link 10",
    },
    {
        test_id: "11",
        name: "Full Test Link 11",
    },
    {
        test_id: "12",
        name: "Full Test Link 12",
    },
    {
        test_id: "13",
        name: "Full Test Link 13",
    },
    {
        test_id: "14",
        name: "Full Test Link 14",
    },
    {
        test_id: "15",
        name: "Full Test Link 15",
    }
];

class FullTestList extends Component {

    testLinkDetail = (id) => {
        console.log(id, "testid");
      //this.props.history.push('/myCollection/' + id)
    }

    render() {
        const {
            classes
        } = this.props;

        const { id } = this.props.match.params;

        return (
            <div >
                <Grid container >
                    {fullTest.map(testLink => {
                        return (
                            <div >
                                <Link to={`/fullTest/${testLink.test_id}/${id}`}>
                                <Card >
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" style={{ textTransform: 'capitalize' }}>
                                                {testLink.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                </Link>
                            </div>
                        );
                    })}
                </Grid>
            </div>
        )
    }
}
export default (FullTestList);