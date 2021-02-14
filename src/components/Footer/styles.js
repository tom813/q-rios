import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    container: {
        textAlign: 'center',
        width: '100%',
        backgroundColor: '#2699fb',
        marginTop: '150px',
        display: 'flex',
        alignItems: 'flex-start'
    },
    footer: {
        padding: '30px 5%',
        /* alignSelf: 'center', */
        color: 'white',
        textAlign: 'left'
    },
    footerLinks: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '16px',
        textAlign: 'left',
        lineHeight: '30px'
    }
}))