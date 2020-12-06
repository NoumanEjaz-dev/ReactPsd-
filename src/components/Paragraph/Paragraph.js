import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    GridContainer: {
        [theme.breakpoints.down('xs')]: {
        display:'grid',
        gridTemplateColumns:'1fr',
        gridTemplateRow:'repeat(auto-fit, minmax(160px, 1fr))',
        },
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        color: '#fff',
        padding: '10px',
    },
    gridItem:{
        [theme.breakpoints.down('xs')]: {
            padding: '20px 0px',
        },
        padding:'20px',
        fontSize:'19px',
    },
    heading:{
        [theme.breakpoints.down('lg')]: {
            display: 'flex',
        },
        [theme.breakpoints.down('xs')]: {
            display:'none',
        },
        color: '#fff',
        display:'flex',
        justifyContent:'center',
        marginTop:'50px',
        marginBottom:'auto',
    },
    heading1:{
        [theme.breakpoints.down('lg')]: {
            display: 'none',
        },
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            fontSize:'38px',
        },
        color: '#fff',
        display:'flex',
        justifyContent:'center',
        marginTop:'50px',
        marginBottom:'auto',
        fontSize:'x-large'
    }




}));



const Paragraph = () => {
    const classes = useStyles();
    return (
        // eslint-disable-next-line react/jsx-filename-extension
        <>
           
            <div>
                <h2 className={classes.heading}> Lorem ipsum dolor sit amet consectetur, </h2>
                <h2 className={classes.heading1}> Lorem ipsum dolor</h2>
                <div className={classes.GridContainer}>
                    <div className={classes.gridItem}>
                        <b style={{ fontSize: "15px" }}>Lorem ipsum dolor sit</b>
                        <br/><br/>                      
                        <b>Lorem ipsum dolor sit</b>
                        <br/><br/>                      
                        Lorem ipsum amet consectetur, adipisicing elit. Vero, in?Lorem ipsum                    
                     </div>
                    <div className={classes.gridItem}>
                        <p>
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, in?
                       </p>
                        <br/> <br/>                    
                    <b>
                     Lorem ipsum dolor sit amet consectetur, in?
                     consectetur, adipisicing elit. Vero,Lorem ipsum dolor sit ipsum dolor sit amet
                    </b>
                    </div>
                    <div className={classes.gridItem}>
                    Lorem ipsum dolor sit amet consectetur
                    consectetur, adipisicing elit. Vero, in?Lorem ipsum dolor sit
                    </div>
                    <div className={classes.gridItem} />
                    <div className={classes.gridItem}>
                        <p style={{ marginTop: '0px' }}>Lorem dolor sit amet consectetur, adipisicing elitum dolor sit amet </p>
                        <br /><span>                    
                            Lorem dolor sit amet consectetur, adipisicing elit. Vero, in?Lorem ipsum dolor sit amet
                            consectetur, adipisicing elit. Vero, in?Lorem ipsum dolor sit amet consectetu
                         </span>
                    </div>
                    <div className={classes.gridItem}>
                        Lorem dolor sit amet consectetur,
                     <br/> <br/>                   
                    Lorem ipsum dolor sit amet rem ipsum dolor sit amet consectetu
                    psum dolor sit amet consectetuin?Lorem ipsum
                   </div>          
                    <div className={classes.gridItem}>
                        Lorem dolor sit amet last Vero, in?Lorem ipsum dolor sit amet               
                        orem ipsum dolor sit amet consectetu in?Lorem ipsum dolor sit amet consectetuin?Lorem ipsum
                    </div>                   
                </div>
            </div>
        </>  

    )
}

export default Paragraph;