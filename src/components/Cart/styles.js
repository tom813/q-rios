import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
    textAlign: 'center',
    backgroundColor: '#2699fb',
    display: 'inline-block',
    padding: '10px 30px',
    color: 'white',

  },
  centerHeadline: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    margin: '40px 0',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    color: 'black'
  },
  cardDetails: {
    display: 'flex',
    marginTop: '30px',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: '15px 30px',
    boxShadow: '0px 0px 13px -7px rgba(0,0,0,.7)',
    borderRadius: '5px'
  },
  lawLink: {
    /* textDecoration: 'none', */
    color: 'black',
    marginRight: '4px',
    alignSelf: 'center',
  }
}));
