import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const Buttons= ()=> {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{marginTop :"20px"}}>
      <Button variant="contained" color="primary">Womens</Button>
      <Button variant="contained" color="primary">
        Mens
      </Button>
      <Button variant="contained" color="primary">
        Kids
      </Button>
      <Button variant="contained" color="primary">
        Babys
      </Button>

    </div>
  );
}