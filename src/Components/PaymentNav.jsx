import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Textfeild } from './Textfeild';
import { PaymentDetails } from "./PaymentDetails";
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Plese Add the Address', "Payment Details",'Check Out'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
        <div>
          Enter your Dno: <Textfeild/>
          Enter Landmark: <Textfeild/>
          Enter Street: <Textfeild/>
          Enter Area: <Textfeild/>
          Enter District: <Textfeild/>
          Enter Pincode: <Textfeild/>
          Enter State: <Textfeild/>
        </div>
        </>
      );
    case 1:
      return <PaymentDetails/>;
    case 2:
      return <>
      <h1>Check Out Page</h1>
      <input type="text" placeholder='   Enter the Card Number'  style={{
        height:"40px",
        width : "20%",
        borderRadius: "10px",
        marginTop:"20px",
        padding:"5px"
      }} /><br />
      <input type="text" placeholder='   Name of the Card Holder'  style={{
        height:"40px",
        width : "20%",
        borderRadius: "10px",
        marginTop:"20px",
        padding:"5px",

      }} /><br/>
      <div>
        <input type="text" placeholder='   Expiary Date' style={{
        height:"40px",
        width : "20%",
        borderRadius: "10px",
        marginTop:"20px",
        padding:"5px"

      }} /><br/>
        <input type="text" placeholder='   CVV' minLength={3} style={{
        height:"40px",
        width : "20%",
        borderRadius: "10px",
        marginTop:"20px",
        padding:"5px"

      }} /><br/>
      </div>
      </>;
    default:
      return 'Unknown step';
  }
}

export const PaymentNav = () => {
  const navigate = useNavigate()

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleShopping= ()=>{
      navigate("/")
  }
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              Order has been Successfully Placed
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
            <Button onClick={handleShopping} className={classes.button}>
              Continue Shopping...
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
