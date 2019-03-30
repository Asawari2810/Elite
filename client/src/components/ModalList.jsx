import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { Grid, Divider } from '@material-ui/core';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
    card: {
        width: 345,
        margin:5
    },
    media: {
      objectFit: 'cover',
    },
    maxLines: {
      display: 'block', /* or inline-block */
      textOverflow: 'ellipsis',
      wordWrap: 'break-word',
      overflow: 'hidden',
      maxHeight: '3.6em',
      lineHeight: '1.8em'
    }
});
class ModalList extends React.Component {

    modalDetail = (id) => {
        console.log(id, "modalid");
      //this.props.history.push('/myCollection/' + id)
    }
    
    render() {
        const { 
            classes,
            data
        } = this.props;

        return (
            <Grid container >
                {data.modalPapers.map(modal => {
                  return (
                    <div >
                      {/* <Link to={`/collection/${collection.id}`}> */}
                         <Card className={classes.card}>
                            <CardActionArea onClick={() => this.modalDetail(modal.modal_id)}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" style={{textTransform: 'capitalize'}}>
                                    {modal.modal_title}
                                </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      {/* </Link> */}
                    </div>
                  );
                })}
              </Grid>
        )
        } 
    
}

export default withStyles(styles) (ModalList);