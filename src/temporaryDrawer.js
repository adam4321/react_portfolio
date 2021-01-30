/**************************************************************************** 
**    Mobile menu drawer component which can open from the left when the
**    screen width is below 960px screen width. It is imported into app.js
**    to allow for a a usable tablet and phone menu experience. It is a
**    Material Ui component.
****************************************************************************/

// @ts-check

import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import menu from './images/menu.png';
import icon from './images/x-icon.png';
import { Link } from 'react-scroll';


/* Mobile Drawer Component ------------------------------------------------- */

function TemporaryDrawer() {
    const [left, setLeft] = useState(false);

    const toggleDrawer = (side, open) => () => {
        setLeft(open);
    };

    const sideList = (
        <div className="drawer">
            
            <List id="menu-list">
                <button className="button-styled-link" onClick={toggleDrawer('left', false)}>
                    <ListItem id="close">
                        <ListItemIcon id="close">
                            <img src={icon} alt="x icon" id="x-icon"/>
                        </ListItemIcon>
                        <p id="close-text">CLOSE MENU</p>
                    </ListItem>
                </button>
                <Divider className="divider"/>

                <Link
                    activeClass="active"
                    to="stack"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={550}
                    delay={200}
                >
                    <ListItem id="projects-link" onClick={toggleDrawer('left', false)}>
                        <p id="projects-link">Projects</p>
                    </ListItem>
                </Link>
                <Divider className="divider"/>

                <Link
                    activeClass="active"
                    to="bottom-container"
                    spy={true}
                    smooth={true}
                    offset={20}
                    duration={550}
                    delay={200}
                >
                    <ListItem id="about-link" onClick={toggleDrawer('left', false)}>
                        <p id="about-link">About</p>
                    </ListItem>
                </Link>
                <Divider className="divider"/>

                <a href="https://adamjwright.com/blog">
                    <ListItem id="blog-link">
                        <p id="blog-link">Blog</p>
                    </ListItem>
                </a>
                <Divider className="divider"/>
                <a href="https://adamjwright.com/blog/contact_me">
                    <ListItem id="contact-me-link">
                        <p id="contact-me-link">Contact Me</p>
                    </ListItem>
                </a>
                <Divider className="divider"/>

            </List>
        </div>
    );

    return (
        <>
            <div onClick={toggleDrawer('left', true)} id="menu-container">
                <img src={menu} alt="menu" className={'menu'} />
                <p id="menu-text">Menu</p>
            </div>

            <Drawer open={left} onClose={toggleDrawer('left', false)}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={toggleDrawer('left', false)}
                    onKeyDown={toggleDrawer('left', false)}
                >
                    {sideList}
                </div>
            </Drawer>
        </>
    );
}

export default TemporaryDrawer;
