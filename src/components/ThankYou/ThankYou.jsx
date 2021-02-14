import React from 'react';
import useStyles from './styles';
import {Container, Typography, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

const ThankYou = () => {

    const classes = useStyles();

    return (
        <Container className={classes.tyContainer}>
            <Typography variant="h2">Danke für Ihre Bestellung</Typography>
            <br /><hr /><br />
            <Typography >Wir haben Ihnen alle Daten per E-Mail geschickt.</Typography>
            <br /><br />
            <Button component={Link} to="/" variant="contained" color="primary" >Weiter</Button>
            <br /><br />
            <Typography variant="p">Bei Fragen, Problemen oder Feedback melden Sie sich gerne an uns: gesundheit@q-rios.de</Typography>
        </Container>
    )
}

export default ThankYou
