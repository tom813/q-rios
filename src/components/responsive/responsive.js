import useStyles from './style';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import json2mq from 'json2mq'; 


export const Responsive = () => {

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
}

export default Responsive;