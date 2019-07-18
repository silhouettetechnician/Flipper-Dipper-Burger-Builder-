import React from 'react'
import classes from '../sideDrawer/SideDrawerToggle.css'
const SideDrawerButton = (props) => {
    
    return ( 

        <div onClick={props.clicked} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
        </div>
     );
}
 
export default SideDrawerButton;