import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const Buttons= ()=> {
  const navigate = useNavigate();
  const classes = useStyles();
  const goToMens = ()=>{
    navigate("/mens")
  }
  return (
    <div className={classes.root} style={{marginTop :"20px"}}>
      <Button variant="contained" color="primary" onClick={goToMens}>Womens</Button>
      <Button variant="contained" color="primary" onClick={goToMens}>
        Mens
      </Button>
      <Button variant="contained" color="primary" onClick={goToMens}>
        Kids
      </Button>
      <Button variant="contained" color="primary" onClick={goToMens}>
        Babys
      </Button>

    </div>
  );
}