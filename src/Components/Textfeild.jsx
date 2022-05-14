import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export const Textfeild=()=> {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">

      <div>
        <TextField
          id="outlined-size-normal"
          label= "Enter the Details"
          variant="outlined"
          style={{
              width :"30%"
          }}
        />
      </div>
    </form>
  );
}