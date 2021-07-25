/**********************************************************************
** Author:       Adam Wright
** Description:  The main file for my personal portfolio site. This file
**               renders the site's layout. It uses Material Ui as a 
**               component library.
**********************************************************************/

// @ts-check

// Imported libraries ---------------------------------------------------------
import React from 'react';
import './App.css';
import './mediaQuery.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import FlippingIcons from './FlippingIcons.js';
import TemporaryDrawer from './TemporaryDrawer.js';

// Images for the page --------------------------------------------------------
import logo from './images/Adam_logo.png';
import skyline from './images/skyline.jpg';
import pin from './images/maps-pin-smaller.png';
import github from './images/github-icon.png';
import linkedin from './images/linkedin-icon.png';
import SmallerProjects from './SmallerProjects.js';
import LargerProjects from './LargerProjects.js';


// Material UI styles object --------------------------------------------------
const styles = theme => ({
    appBar: {
        position: 'relative',
        backgroundColor: '#04536d',
        height: 128
    },
    icon: {
        marginRight: theme.spacing(2)
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper
    },
    heroContent: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: `${theme.spacing(3)}px ${theme.spacing(2)}px`
    },
    heroButtons: {
        marginTop: theme.spacing(4)
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(1500 + theme.spacing(3 * 2))]: {
            width: 1500,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
    cardGrid: {
        padding: `${theme.spacing(8)}px 0`
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%' // 16:9
    },
    cardContent: {
        flexGrow: 1
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6)
    },
    list: {
        width: 300
    },
    fullList: {
        width: 'auto'
    }
});


// About Me text --------------------------------------------------------------
const text = {
    about: `My name is Adam Wright and I'm a software engineer for Open Sky Software.
    I live in Seattle and I'm an Oregon State University alumni with a B.S. in 
    Computer Science. I work within a stack based around Java Spring MVC at Open Sky.
    At OSU the primary focus was on C/C++ and Python command line applications on Linux. 
    My personal projects use a mix of React.js, JavaScript and node.js, Java and Spring
    Boot, and C++ compiled for the web using Web Assembly.`,

    email: `You can reach out to me here on the contact page or email me at 
    adamjw321@gmail.com.`
}

// Page layout ----------------------------------------------------------------
function Album(props) {
    const { classes } = props;

    return (
        <>
            <CssBaseline />

            {/* Header nav bar -------------------------------------------- */}
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={'barbar'}>
                    <a 
                        className="darken" 
                        href="https://adamjwright.com"
                    > 
                        <img src={logo} alt="logo" className={'logogo'}/>
                    </a>

                    {/* Header links */}
                    <div id="scroll-links">
                        <a 
                            href="https://adamjwright.com/blog/contact_me"
                            id="contact-me"
                            className="header-link"
                        > Contact Me </a>
                        <a 
                            href="https://adamjwright.com/blog/page/1"
                            id="blog"
                            className="header-link"
                        > Blog </a>
                        <Link
                            activeClass="active"
                            to="bottom-container"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={550}
                            delay={200}
                        >
                            <div id="about" className="header-link"> About </div>
                        </Link>
                        <Link
                            activeClass="active"
                            to="stack"
                            spy={true}
                            smooth={true}
                            offset={-10}
                            duration={550}
                            delay={200}
                        >
                            <div id="projects" className="header-link"> Projects </div>
                        </Link>
                    </div>

                    {/* Responsive menu component ------------------------- */}
                    <div id="menu-container">

                        <TemporaryDrawer />

                    </div>

                </Toolbar>
            </AppBar>

            {/* Skills section -------------------------------------------- */}
            <main>
                <div className={classes.heroUnit}>
                    <div className={classes.heroContent}>
                        <Grid container justify="center">
                            <Grid id="icon-container" item xs={9} sm={9} md={12} lg={12}>

                                {/* Grid of tech skills icons */}
                                <FlippingIcons />

                            </Grid>
                        </Grid>
                    </div>
                </div>

                <div className={classNames(classes.layout, classes.cardGrid)}>

                    {/* Full stack project cards --------------------------- */}
                    <div className="full-stack" id="stack">
                        <Grid container spacing={5} justify="center">

                            <LargerProjects classes={classes} />

                        </Grid>
                    </div>

                    {/* 4 Smaller project cards --------------------------- */}
                    <div className="smaller-apps">
                        <Grid container spacing={5}>
                            
                            <SmallerProjects classes={classes} />

                        </Grid>
                    </div>

                </div>
            </main>

            {/* Footer, which is the bottom 1/3 of the page --------------- */}
            <footer id="footer" className={classes.footer}>
                <div className="bottom-container">

                    {/* About me box -------------------------------------- */}
                    <div id="about-text">
                        <Typography variant="h5" align="center" id="me" gutterBottom> About Me </Typography>
                        <Typography variant="subtitle1" align="justify" color="textSecondary" component="p">
                            {text.about}
                        </Typography>
                        <br />
                        <Typography variant="subtitle1" align="justify" color="textSecondary" component="p">
                            {text.email}
                        </Typography> 
                    </div>

                    {/* Social Links -------------------------------------- */}
                    <div id="social" className="footer-card">
                        <Typography variant="h5" align="center" id="social-title" gutterBottom> Social Links </Typography>
                        <a href="https://github.com/adam4321">
                            <img 
                                id="github-img" 
                                src={github} 
                                alt="github icon"
                                width="59"
                                height="60"
                            />  
                            <Typography id="github" variant="subtitle1" color="textSecondary" component="p">
                                GitHub
                            </Typography>
                        </a>
                        <br />
                        <a href="https://www.linkedin.com/in/adamjw321">
                            <img 
                                id="linkedin-img" 
                                src={linkedin} 
                                alt="linkedin icon"
                                width="56"
                                height="58"
                            />
                            <Typography id="linkedin" variant="subtitle1" color="textSecondary" component="p">
                                LinkedIn 
                            </Typography>
                        </a>
                    </div>

                    {/* The skyline background and location pin ----------- */}
                    <img 
                        src={skyline} 
                        alt="seatle skyline" 
                        className="skyline-img" 
                        width="1903"
                        height="859"
                    />
                    <div className="overlay">
                        <a
                            href="https://www.google.com/maps/place/1215+N+45th+St,+Seattle,+WA+98103/@47.6570521,-122.3612009,13.25z/data=!4m5!3m4!1s0x5490145167fe978d:0x64d3c93762b6dee3!8m2!3d47.6612275!4d-122.3430452"
                            className="icon"
                        >
                            <img 
                                src={pin} 
                                alt="red location icon" 
                                id="red-pin"
                                width="190"
                                height="190"
                            />
                        </a>
                    </div>

                </div>
            </footer>
        </>
    );
}

Album.propTypes = {
    classes: PropTypes.object.isRequired
};

// @ts-ignore
export default withStyles(styles)(Album);
