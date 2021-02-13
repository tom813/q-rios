import {makeStyles} from '@material-ui/core/styles';
import ImgAutoMaske from '../../../assets/istockphoto-1279540262-2048x2048.jpg';



export default makeStyles((theme) => ({
    /* toolbar: theme.mixins.toolbar, */
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    marginTop: '40px',
    overflow: 'hidden',
    maxWidth: '100%',
    padding: '0'
    /* padding: theme.spacing(3), */
  },
  root: {
    flexGrow: 1,
  },
  space: {
    padding: '2%',
    alignItems: 'center',
  },
    img: {
      width: '100%',
      Heigth: '400px',
      display: 'block',
      minHeight: '300px',
      padding: '0'
      /* height: '400px', */
      /* display: 'flex',
      justifyContent: 'center', */
      /* overflow: 'hidden',
      minWidth: '300px',
      boxSizing: 'border-box' */
      },
      test: {
        width: '100%',
        paddingTop: '40%',
        backgroundSize: 'cover',
        /* backgroundImage: "url(" + ImgAutoMaske + ")", */
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px',
      },
      image: {
        /* width: '100%', */
        maxHeight: '600px',
        /* maxWidth: '100%', */
        /* minHeight: '400px', */
        /* minWidth: '1187px', */
        /* height: '500px' */
        /* width: '140%', */
        display: 'block',
        objectFit: 'cover',
        paddingTop: '20px', 
        /* minWidth: '100%',
        maxHeight: '600px' */
      },
      maskeTransparent: {
        width: '100%',
        alignSelf: 'center'
      }
}))