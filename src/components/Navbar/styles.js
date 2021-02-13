import { makeStyles, fade } from '@material-ui/core/styles';
import { Android } from '@material-ui/icons';

 const drawerWidth = 0;
 const media = {
  desktop: '@media(min-width: 1000px)'
}

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    backgroundColor: '#2699fb',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    width: '100% !important',
  },
  contact: {
    backgroundColor: '#ddd',
    minHeight: '40px',
    display: 'flex',
    justifyContent: 'space-around',
    fontWeight: 600,
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    color: 'white',
    fontWeight: 700,
  },
  underpage: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 600
  },
  image: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  inline: {
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  mobileBtn: {
    backgroundColor: 'white',
    fontWeight: 600,
    paddingRight: '30px',
    paddingLeft: '30px'
  },
  mobileNav: {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    textDecoration: 'none', 
    color: '#000', 
    margin: '5px 0',
  }
}));
