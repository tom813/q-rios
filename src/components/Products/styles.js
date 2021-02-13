import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  /* toolbar: theme.mixins.toolbar, */
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: '10px 0',
    justifyContent: 'center',
  },
  root: {
    flexGrow: 1,
  },
  htwo: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#2699fb',
    display: 'inline-block',
    margin: '50px 0',
    padding: '20px 25px',
    textAlign: 'center',
  }
}));
