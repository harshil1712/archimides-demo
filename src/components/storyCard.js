import React from 'react'
import { Card, CardContent, Typography, Grid, Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        marginBottom:18,
        maxWidth:700,
        textAlign:"left"
    },
    approved:{
        borderLeft:'10px solid green'
    },
    rejected:{
        borderLeft:'10px solid red'
    }
})

export default (props)=>{
    const { summary, status, description, complexity, estimatedHrs, cost, type } = props.data;
    const { card, approved, rejected } = useStyles();
    let cardClasses = [
        card,
        status==='approved'?approved:rejected
    ]
    cardClasses = cardClasses.join(' ')
    return(
        <Card variant="outlined" className={cardClasses}>
            <CardContent>
                <Typography variant="h5">{summary}</Typography>
                <Typography>{description}</Typography>
                <br />
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="body2"><strong>Time:</strong> {estimatedHrs} Hour(s)</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography  variant="body2" align="right"><strong>Cost:</strong> ${cost}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body2">
                            <strong>Complexity: </strong>
                            <Chip color="secondary" label={complexity} />
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography  variant="body2" align="right">
                            <strong>Type: </strong>
                            <Chip label={type} />
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}