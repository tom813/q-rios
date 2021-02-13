import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar, 
    main: {
        padding: '0 2%',
    },
    productImg: {
        width: '100%'
    },
    productDetails: {
        padding: '30px 0',
    },
    priceAndQuantity: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    productPrice: {
        margin: '20px 40px 20px 0',
        fontWeight: 600,

    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        textAlign: 'center'
    },
    buyBtn: {
        margin: '30px 0',
        fontSize: '20px',
        padding: '10px 40px'
    },
    moreBtn: {
        padding: '10px 20px',
        backgroundColor: '#1976d2',
        color: 'white',
        fontSize: '25px'
    },
    option: {
        border: '1px solid black',
        padding: '5px 25px',
        margin: '0 20px 20px 0',
        borderRadius: '5px',
        cursor: 'Pointer',
    },
    optionName: {
        fontWeight: 600
    },
    optionPrice: {
        fontWeight: 300,
        fontSize: '14px'
    }
}))