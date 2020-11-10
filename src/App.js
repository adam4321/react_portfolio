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
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TemporaryDrawer from './temporaryDrawer.js';
import { Link } from 'react-scroll';


// Images for the page --------------------------------------------------------

import amp_library_screenshot from './images/amp-library-screenshot.jpg';
import bug_tracker_screenshot from './images/bug_tracker_screenshot.png';
import drum_machine_screenshot from './images/drum-machine-screenshot.jpg';
import maze_game_screenshot from './images/maze_game_screenshot.png';
import weather_screenshot from './images/weather_app.png';
import calculator_screenshot from './images/calculator-screenshot.png';
import logo from './images/Adam_logo.png';
import skyline from './images/skyline.jpg';
import pin from './images/maps-pin-smaller.png';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import git from './images/git.png';
import react from './images/react-1.png';
import node from './images/node-js-icon.png';
import github from './images/github-icon.png';
import mysql from './images/mysql-icon.png';
import linkedin from './images/linkedin-icon.png';
import cpp from './images/c++_icon.png';


// Material UI styles object --------------------------------------------------

const styles = theme => ({
    appBar: {
        position: 'relative',
        backgroundColor: '#04536d',
        height: 128
    },
    icon: {
        marginRight: theme.spacing.unit * 2
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper
    },
    heroContent: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1500 + theme.spacing.unit * 3 * 2)]: {
            width: 1500,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`
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
        padding: theme.spacing.unit * 6
    },
    list: {
        width: 300
    },
    fullList: {
        width: 'auto'
    }
});


// Array of objects holding the data for grid of tech skills icons below ------

const TECH_ICONS_DATA = [
    {
        href: 'https://en.wikipedia.org/wiki/HTML',
        className: 'tech-icon',
        id: 'html-icon',
        alt: 'html',
        src: html,
    },
    {
        href: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets',
        className: 'tech-icon',
        id: 'css-icon',
        alt: 'css',
        src: css,
    },
    {
        href: 'https://en.wikipedia.org/wiki/JavaScript',
        className: 'tech-icon',
        id: 'js-icon',
        alt: 'js',
        src: js,
    },
    {
        href: 'https://en.wikipedia.org/wiki/React_(JavaScript_library)',
        className: 'tech-icon',
        id: 'react-icon',
        alt: 'react',
        src: react,
    },
    {
        href: 'https://en.wikipedia.org/wiki/Git',
        className: 'tech-icon',
        id: 'git-icon',
        alt: 'git',
        src: git,
    },
    {
        href: 'https://en.wikipedia.org/wiki/Node.js',
        className: 'tech-icon',
        id: 'node-icon',
        alt: 'node',
        src: node,
    },
    {
        href: 'https://en.wikipedia.org/wiki/MySQL',
        className: 'tech-icon',
        id: 'mysql-icon',
        alt: 'mysql',
        src: mysql,
    },
    {
        href: 'https://en.wikipedia.org/wiki/C%2B%2B',
        className: 'tech-icon',
        id: 'cpp-icon',
        alt: 'C++',
        src: cpp,
    }
];


// Object holding the information for the two upper project's cards -----------

const LARGE_PROJ_CARDS = [
    {
        key: 1,
        image: amp_library_screenshot,
        title: 'Amp Information Library',
        project: 'Amp Information Library',
        link: 'https://adamjwright.com/amp_library',
        about:
            `A dashboard built using React where the user can sign in and add photos, schematics, 
            settings, and other helpful information about electric guitar amplifiers.`
    },
    {
        key: 2,
        image: bug_tracker_screenshot,
        title: 'Software Bug Tracker',
        project: 'Software Bug Tracker',
        link: 'https://adamjwright.com/bug_tracker',
        about:
            `A dashboard built using Node.js and Handlebars which allows the user to add new 
            software bugs and to track and update their status as they are fixed.`
    }
];


// Object holding the information for the four lower project's cards ----------

const SMALL_PROJ_CARDS = [
    {
        key: 1,
        image: drum_machine_screenshot,
        title: 'React Drum Machine',
        project: 'React Drum Machine',
        link: 'https://adamjwright.com/drum_machine',
        about:
            `Plays a sound when you press the keyboard key or click the button for the displayed letter.`
    },
    {
        key: 2,
        image: maze_game_screenshot,
        title: 'C++ WASM Maze Game',
        project: 'C++ WASM Maze Game',
        link: 'https://adamjwright.com/wasm_maze_game',
        about:
            `C++ command line maze game which is converted to run in the browser by using
            emscripten to compile it to Web Assembly.`
    },
    {
        key: 3,
        image: calculator_screenshot,
        title: 'React Calculator',
        project: 'React Calculator App',
        link: 'https://adamjwright.com/react_calculator',
        about:
            `Modern style calculator application that is fully mobile responsive and supports all the 
            basic operations.`
    },
    {
        key: 4,
        image: weather_screenshot,
        title: 'Weather Widget',
        project: 'Weather Widget',
        link: 'https://adamjwright.com/weather_widget',
        about:
            `Weather widget built in vanilla JavaScript which shows the local weather and
            allows the user to manually change locations.`
    }
];


// Page layout ----------------------------------------------------------------

function Album(props) {
    const { classes } = props;

    return (
        <React.Fragment>
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
                    <div id="scroll-links">
                        <a 
                            href="https://adamjwright.com/blog/contact_me"
                            id="contact-me"
                            className="header-link"
                        > Contact Me </a>
                        <a 
                            href="https://adamjwright.com/blog"
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
                            <a href="#footer" id="about" className="header-link"> About </a>
                        </Link>
                        <Link
                            activeClass="active"
                            to="full-stack"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={550}
                            delay={200}
                        >
                            <a href="#stack" id="projects" className="header-link"> Projects </a>
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
                            <Grid id="icon-container" item xs={9} sm={9} md={9} lg={12}>

                                {/* Grid of tech skills icons */}

                                {TECH_ICONS_DATA.map(data => (
                                    <a href={data.href}>
                                        <img
                                            className={data.className}
                                            id={data.id}
                                            alt={data.alt}
                                            src={data.src}
                                        />
                                    </a>
                                ))}

                            </Grid>
                        </Grid>
                    </div>
                </div>

                <div className={classNames(classes.layout, classes.cardGrid)}>


                    {/* Full stack project card --------------------------- */}

                    <div className="full-stack" id="stack">
                        <Grid container spacing={5} justify="center">

                            {/* This section maps the LARGE_PROJ_CARDS object into 2 card components */}

                            {LARGE_PROJ_CARDS.map(card => (
                                <Grid item key={card.key} sm={6} md={5} lg={5}>
                                    <Card className={classes.card}>
                                        <a href={card.link}>
                                            <CardMedia 
                                                className={classes.cardMedia} 
                                                image={card.image} 
                                                title={card.title}
                                            />
                                        </a>
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2"> {card.project} </Typography>
                                            <Typography> {card.about} </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </div>


                    {/* Smaller project cards ----------------------------- */}

                    <div className="smaller-apps">
                        <Grid container spacing={5}>

                            {/* This section maps the SMALL_PROJ_CARDS object into 4 card components */}

                            {SMALL_PROJ_CARDS.map(card => (
                                <Grid item key={card.key} sm={6} md={3} lg={3}>
                                    <Card className={classes.card}>
                                        <a href={card.link}>
                                            <CardMedia 
                                                className={classes.cardMedia} 
                                                image={card.image} 
                                                title={card.title}
                                            />
                                        </a>
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2"> {card.project} </Typography>
                                            <Typography> {card.about} </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}

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
                        <Typography variant="subtitle1" align="left" color="textSecondary" component="p">
                            I am Computer Science student in Seattle who is looking
                            for my first position after graduation. I have worked in
                            a variety of technologies while completing my B.S. Those technologies 
                            range from C/C++ and Python command line applications on Linux to full stack web 
                            applications using node.js and Handlebars for server-side rendering. I have worked with
                            React in my spare time to build client-side rendered web applications and
                            that is what I used to build most of this site.
                        </Typography>
                        <br />
                        <Typography variant="subtitle1" align="left" color="textSecondary" component="p">
                            If you would like to reach out to me then feel free to use the contact page on
                            this site or email me at adamjw321@gmail.com.
                        </Typography> 
                    </div>


                    {/* Social Links -------------------------------------- */}

                    <div id="social">
                        <Typography variant="h5" align="center" id="social-title" gutterBottom> Social Links </Typography>
                        <a href="https://github.com/adam4321">
                            <img id="github-img" src={github} alt="github icon"/>  
                            <Typography id="github" variant="subtitle1" color="textSecondary" component="p">
                                GitHub
                            </Typography>
                        </a>
                        <br />
                        <a href="https://www.linkedin.com/in/adamjw321/">
                            <img id="linkedin-img" src={linkedin} alt="linkedin icon"/>
                            <Typography id="linkedin" variant="subtitle1" color="textSecondary" component="p">
                                LinkedIn 
                            </Typography>
                        </a>
                    </div>


                    {/* The skyline background and location pin ----------- */}

                    <img src={skyline} alt="seatle skyline" className="skyline-img"/>
                    <div className="overlay">
                        <a
                            href="https://www.google.com/maps/place/1215+N+45th+St,+Seattle,+WA+98103/@47.6570521,-122.3612009,13.25z/data=!4m5!3m4!1s0x5490145167fe978d:0x64d3c93762b6dee3!8m2!3d47.6612275!4d-122.3430452"
                            className="icon"
                        >
                            <img src={pin} alt="red location icon" id="red-pin"/>
                        </a>
                    </div>

                </div>
            </footer>
        </React.Fragment>
    );
}

Album.propTypes = {
    classes: PropTypes.object.isRequired
};

// @ts-ignore
export default withStyles(styles)(Album);
