
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import menu from './images/menu.png';
import icon from './images/x-icon.png';

// The mobile menu drawer component

class TemporaryDrawer extends React.Component {
    state = {
        left: false
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open
        });
    };

    render() {
        const sideList = (
            <div className="drawer">
                <List id="menu-list">
                    <button
                        className="button-styled-link"
                        onClick={this.toggleDrawer('left', false)}
                    >
                        <ListItem id="close">
                            <ListItemIcon id="close">
                                <img src={icon} alt="x icon" id="x-icon" />
                            </ListItemIcon>
                            <p id="close-text">CLOSE MENU</p>
                        </ListItem>
                    </button>
                    <Divider className="divider" />
                    <a href="https://adamjwright.com/#stack">
                        <ListItem id="projects-link">
                            <p id="projects-link">Projects</p>
                        </ListItem>
                    </a>
                    <Divider className="divider" />
                    <a href="https://adamjwright.com/#footer">
                        <ListItem id="about-link">
                            <p id="about-link">About</p>
                        </ListItem>
                    </a>
                    <Divider className="divider" />
                    <a href="https://adamjwright.com/blog">
                        <ListItem id="blog-link">
                            <p id="blog-link">Blog</p>
                        </ListItem>
                    </a>
                    <Divider className="divider" />
                </List>
            </div>
        );

        return (
            <div>
                <div
                    onClick={this.toggleDrawer('left', true)}
                    id="menu-container"
                >
                    <img src={menu} alt="menu" className={'menu'} />
                    <p id="menu-text">Menu</p>
                </div>
                <Drawer
                    open={this.state.left}
                    onClose={this.toggleDrawer('left', false)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

// TemporaryDrawer.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// @ts-ignore
// export default withStyles(styles)(TemporaryDrawer);

export default TemporaryDrawer;