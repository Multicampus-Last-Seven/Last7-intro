import { Container, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    root:{
        display: "flex",
        justifyContent: "center",
        padding: theme.spacing(3)
    },
    imgSize:{
        width: "100%"
    }
}))

function Role() {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <img src="./images/role.jpg" alt="" className={classes.imgSize}/>            
        </Container>
    )
}

export default Role
