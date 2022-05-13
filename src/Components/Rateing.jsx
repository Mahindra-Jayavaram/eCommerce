// import React from 'react';
// import Rating from '@material-ui/lab/Rating';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// export const Rateing=()=> {
//   const [value, setValue] = React.useState(2);

//   return (
//     <div>
//       <Box component="fieldset" mb={3} borderColor="transparent">
//         <Typography component="legend">Controlled</Typography>
//         <Rating
//           name="simple-controlled"
//           value={value}
//           onChange={(event, newValue) => {
//             setValue(newValue);
//           }}
//         />
//       </Box>
//     </div>
//   );
// }

import React from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Box from '@material-ui/core/Box';

// const StyledRating = withStyles({
//   iconFilled: {
//     color: '#ff6d75',
//   },
//   iconHover: {
//     color: '#ff3d47',
//   },
// })(Rating);

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export const Rateing=()=> {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        {/* <Typography component="legend">Custom empty icon</Typography> */}
        <Rating
          name="customized-empty"
          defaultValue={2}
          precision={0.5}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
      </Box>
    </div>
  );
}
