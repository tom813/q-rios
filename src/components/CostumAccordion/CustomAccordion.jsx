import React from 'react';
import useStyles from './styles.js';
import {Accordion, AccordionDetails, AccordionSummary, Grid, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

/* const accordionData = [
    {sum: 'erste summera/ueberschrift', det: 'erste zusammenfassung fckafd'},
] */

const CustomAccordion = ({accordionData, heading}) => {
    const classes = useStyles(); 

    return (
        <Grid className={classes.accordions}>
                <Typography variant="h3" className={classes.blueHeading}>{heading}</Typography>
            <div  xs={12} sm={12} md={12} lg={12}>
                {accordionData.map((accData) => (
                    <>
                        <Accordion className={classes.accordion}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={accData.sum}
                    id={accData.key}
                    >
                        <Typography variant="h5" style={{textAlign: 'left',}}>{accData.sum}</Typography>
                    </AccordionSummary>
                    <AccordionDetails dangerouslySetInnerHTML={{ __html: accData.det }} component="p" style={{textAlign: 'justify',}}>
                        {/* {accData.det} */}
                    </AccordionDetails>
                </Accordion>
                    </>
                ))}
                </div>
            </Grid>
    )
}

export default CustomAccordion;
