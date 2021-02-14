import React, { useRef } from "react";
import useDimensions from "react-cool-dimensions";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import json2mq from 'json2mq';
import useStyles from './style';
import Responsive from './responsive';

export const Card = () => {
    /* const matches = useMediaQuery('(min-width:600px)'); */

    const classes = useStyles();

     const matches = useMediaQuery(
        json2mq({
          minWidth: 1200,
        }),
      );

      const matches2 = useMediaQuery(
          json2mq({
              minWidth: 600,
          }),
      )
    
      const chooseClass = () => {
          if(matches){
              return classes.test1
          }
          else if(matches2){
              return classes.test3
          }
          else{
              return classes.test2
          }
      }

    return (
    <div style={{padding: '200px'}}>
        {/* <span style={{backgroundColor: (matches ? 'green' : 'red')}}>{`(min-width:600px) matches: ${matches}`}</span>
         */}
         <span className={[classes.test4, chooseClass()].join(" ")}>{`(min-width:600px) matches: `}</span>
    </div>
    );
};

export default Card;