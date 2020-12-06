import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// eslint-disable-next-line import/no-unresolved
import Group from '../assets/images/Group.png';

const useStyles = makeStyles(() => ({
    button: {
        margin: '8px 0px',
        width:'100%',
        opacity:0.3,
    },
    img1: {
        width: '88px',
    }
}));

// eslint-disable-next-line react/prop-types
function IconButtons({ backgroundColor }) {
    const classes = useStyles();

    return (
        // eslint-disable-next-line react/jsx-filename-extension
        <div>
            {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
            <Button
                style={{ backgroundColor }}
                variant="contained"
                // color="primary"
                // style={{ color }}
                className={classes.button}
                endIcon={<img  className={classes.img1} src={Group} alt="group" />}
             />
        </div>
    );
}

export default IconButtons
