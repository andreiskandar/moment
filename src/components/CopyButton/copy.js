import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { user } from '../../controllers';
import useStyles from '../styles';

export default function CopyButton(props) {
  const classes = useStyles();
  const role = user.getRole();
  const day1 = new Date(props.mon - 86400000).toISOString();
  const day2 = new Date(props.sun + 86399999).toISOString();

  const handleCopyClick = () => {
    let apiUserShift;
    if (role === 'admin') {
      apiUserShift = axios.get('api/shifts/events/manager', {
        params: { firstDay: day1.split('T')[0], lastDay: day2.split('T')[0] },
      });
    }

    Promise.all([apiUserShift])
      .then((all) => {
        const newShift = [...all[0].data];
        props.setCopyData(newShift);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Button color='primary' onClick={handleCopyClick} variant='contained' className={classes.button__secondary_navbar}>
      <img src='images/copy.png' alt='copy icon' className={classes.icon__secondary_navbar}></img>
      Copy
    </Button>
  );
}
