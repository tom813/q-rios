import { makeStyles } from '@material-ui/core/styles';
import ImgMaske from '../../assets/istockphoto-1207437632-2048x2048.jpg';
import ImgAerzte from '../../assets/istockphoto-1208116440-2048x2048.jpg';




export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    marginTop: '40px',
    overflow: 'hidden',
    maxWidth: '100%',
    /* padding: theme.spacing(3), */
  },
  root: {
    flexGrow: 1,
  },
  img: {
    width: '100%',
    /* height: '400px', */
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    maxWidth: '100%',
  },
  image: {
    width: '100%',
    
    /* minHeight: '400px', */
    /* minWidth: '1187px', */
    
  },
  headingBox: {
    alignSelf: 'center', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  bg: {
    /* backgroundImage: "url(" + ImgMaske + ")", */
    width: '100%',
    /* paddingTop: '40%', */
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '400px',
  },
  headline: {
    backgroundColor: '#2699fb',
    color: 'white',
    display: 'inline-block',
    padding: '5px 45px',
  },
  underHeadline: {
    fontSize: '1.3rem',
    fontWeight: 400
  },
  ctaBtn: {
    fontWeight: 600,
    padding: '10px 40px',
  },
  secondHeader: {
    display: 'block', 
    textAlign: 'right', 
    backgroundColor: 'rgba(255,255,255,.7)', 
    padding: '10px 25px', 
    borderRadius: '5px',
  },
  startProduct: {
    alignSelf: 'stretch !important',
    height: '100%',
  },


  test1: {
    backgroundColor: 'red',
    fontSize: '50px',
},
test2: {
    backgroundColor: 'blue',
    fontSize: '10px',
},
test3: {
    backgroundColor: 'orange',
    textDecoration: 'underline'
},
test4: {
    color: 'lightgreen',
},
  
}));