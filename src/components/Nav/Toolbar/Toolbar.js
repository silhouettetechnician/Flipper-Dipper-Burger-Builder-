import React from 'react'
import Logo from '../../Logo/Logo'
import classes from '../Toolbar/Toolbar.css'
import SideDrawerToggle from '../../sideDrawer/SideDrawerToggle'

import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => {
    return ( 
        <header className={classes.Toolbar}>
        <SideDrawerToggle clicked={props.drawerClicked} />
            <div className={classes.Logo}>
            <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
           <NavigationItems />
           </nav>
        </header>
     );
}
 
export default toolbar;


