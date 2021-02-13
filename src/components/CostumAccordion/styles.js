import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  accordions: {
    padding: '40px 0', 
    width: '100%', 
    minWidth: '300px', 
    maxWidth: '800px', 
    margin: '40px auto',
    textAlign: 'center'
  },
  blueHeading: {
    backgroundColor: '#2699fb',
    color: 'white',
    display: 'inline-block',
    padding: '20px 25px',
    margin: '40px 0',
    fontWeight: 700,
  },
  accordion: {
    margin: '20px 0',
  },
}));