import React from 'react'
import NavigationItems from '../Nav/NavigationItems/NavigationItems';
import Logo from '../Logo/Logo'
import classes from './SideDrawer.css'
import Backdrop from '../UI/Backdrop/Backdrop'
import Aux from '../../HOC/Aux'

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    // conditionally attach css classes to play animation open and close class
    return ( 
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
             <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
            <NavigationItems />
                </nav>
            </div>
        </Aux>
     );
}
 
export default SideDrawer;