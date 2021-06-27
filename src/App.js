/**********************************************************************
** Author:       Adam Wright
** Description:  The main file for my personal portfolio site. This file
**               renders the site's layout. It uses Material Ui as a 
**               component library.
**********************************************************************/

// @ts-check

// Imported libraries ---------------------------------------------------------
import React, { lazy, Suspense } from 'react';
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
import { Link } from 'react-scroll';


// Images for the page --------------------------------------------------------
import quiz_screenshot from './images/quiz_screenshot.png';
import amp_library_screenshot from './images/amp-library-screenshot.jpg';
import bug_tracker_screenshot from './images/bug_tracker_screenshot.png';
import drum_machine_screenshot from './images/drum-machine-screenshot.jpg';
import maze_game_screenshot from './images/maze_game_screenshot.png';
import weather_screenshot from './images/weather_app.png';
import logo from './images/Adam_logo.png';
import skyline from './images/skyline.jpg';
import pin from './images/maps-pin-smaller.png';
import /* webpackPrefetch: true */ html from './images/html.png';
import /* webpackPrefetch: true */ css from './images/css.png';
import /* webpackPrefetch: true */ js from './images/js.png';
import /* webpackPrefetch: true */ git from './images/git.png';
import /* webpackPrefetch: true */ react from './images/react-1.png';
import /* webpackPrefetch: true */ node from './images/node-js-icon.png';
import /* webpackPrefetch: true */ github from './images/github-icon.png';
import /* webpackPrefetch: true */ mysql from './images/mysql-icon.png';
import /* webpackPrefetch: true */ linkedin from './images/linkedin-icon.png';
import /* webpackPrefetch: true */ java from './images/java_icon.png';

// Lazy Imports
const TemporaryDrawer = lazy(() => import('./temporaryDrawer.js'));
const renderLoader = () => <p>Loading</p>;

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


// Array of objects holding the data for grid of tech skills icons below ------
const TECH_ICONS_DATA = [
    {
        href: 'https://en.wikipedia.org/wiki/HTML',
        className: 'tech-icon',
        id: 'html-icon',
        alt: 'html',
        src: html,
        width: "166",
        height: "166"
    },
    {
        href: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets',
        className: 'tech-icon',
        id: 'css-icon',
        alt: 'css',
        src: css,
        width: "160",
        height: "160"
    },
    {
        href: 'https://en.wikipedia.org/wiki/JavaScript',
        className: 'tech-icon',
        id: 'js-icon',
        alt: 'js',
        src: js,
        width: "155",
        height: "155"
    },
    {
        href: 'https://en.wikipedia.org/wiki/React_(JavaScript_library)',
        className: 'tech-icon',
        id: 'react-icon',
        alt: 'react',
        src: react,
        width: "161",
        height: "161"
    },
    {
        href: 'https://en.wikipedia.org/wiki/Java_(programming_language)',
        className: 'tech-icon',
        id: 'java-icon',
        alt: 'Java',
        src: java,
        width: "162",
        height: "163"
    },
    {
        href: 'https://en.wikipedia.org/wiki/Node.js',
        className: 'tech-icon',
        id: 'node-icon',
        alt: 'node',
        src: node,
        width: "192",
        height: "192"
    },
    {
        href: 'https://en.wikipedia.org/wiki/MySQL',
        className: 'tech-icon',
        id: 'mysql-icon',
        alt: 'mysql',
        src: mysql,
        width: "162",
        height: "162"
    },
    {
        href: 'https://en.wikipedia.org/wiki/Git',
        className: 'tech-icon',
        id: 'git-icon',
        alt: 'git',
        src: git,
        width: "131",
        height: "131"
    }
];


// Object holding the information for the two upper project's cards -----------
const LARGE_PROJ_CARDS = [
    {
        key: 1,
        image: quiz_screenshot,
        title: 'QuizSoft Quiz Builder',
        project: 'QuizSoft Quiz Builder',
        link: 'https://adamjwright.com/quiz_soft',
        about:
            `Node.js / MongoDB / Handlebars - Quiz builder where the user can create a set of
            quizzes and then email a one time link and see the results graded and ranked automatically.`
    },
    {
        key: 2,
        image: bug_tracker_screenshot,
        title: 'Software Bug Tracker',
        project: 'Software Bug Tracker',
        link: 'https://adamjwright.com/bug_tracker/login',
        about:
            `Java / Spring Boot / MySQL / Maven - An application which allows the user to add new 
            software bugs and to track and update their status as they are fixed.`
        
    }
];


// Object holding the information for the four lower project's cards ----------
const SMALL_PROJ_CARDS = [
    {
        key: 1,
        image: amp_library_screenshot,
        title: 'Amp Information Library',
        project: 'Amp Information Library',
        link: 'https://adamjwright.com/amp_library',
        about:
            `React.js / Firebase Realtime DB - App where a user can add photos, schematics, 
            settings, and details about electric guitar amplifier circuits.`
    },
    {
        key: 2,
        image: maze_game_screenshot,
        title: 'C++ WASM Maze Game',
        project: 'C++ WASM Maze Game',
        link: 'https://adamjwright.com/wasm_maze_game',
        about:
            `C++ / Web Assembly / JavaScript - Command line maze game converted to run in the browser using
            emscripten and an HTML and CSS CLI.`
    },
    {
        key: 3,
        image: drum_machine_screenshot,
        title: 'React Drum Machine',
        project: 'React Drum Machine',
        link: 'https://adamjwright.com/drum_machine',
        about:
            `React.js - Drum machine that can be played by either clicking its buttons or pressing 
            the keyboard keys shown.`
    },
    {
        key: 4,
        image: weather_screenshot,
        title: 'Weather Widget',
        project: 'Weather Widget',
        link: 'https://adamjwright.com/weather_widget',
        about:
            `JavaScript - Weather widget which finds the user's location and shows the local weather and
            allows the user to manually change locations.`
    }
];

// Page text ------------------------------------------------------------------
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
                        <Suspense fallback={renderLoader()}>
                            <TemporaryDrawer />
                        </Suspense>
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
                                    <a key={data.id} href={data.href}>
                                        <img
                                            className={data.className}
                                            id={data.id}
                                            alt={data.alt}
                                            src={data.src}
                                            width={data.width}
                                            height={data.height}
                                        />
                                    </a>
                                ))}

                            </Grid>
                        </Grid>
                    </div>
                </div>

                <div className={classNames(classes.layout, classes.cardGrid)}>

                    {/* Full stack project cards --------------------------- */}
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
                        <Typography variant="subtitle1" align="justify" color="textSecondary" component="p">
                            {text.about}
                        </Typography>
                        <br />
                        <Typography variant="subtitle1" align="justify" color="textSecondary" component="p">
                            {text.email}
                        </Typography> 
                    </div>


                    {/* Social Links -------------------------------------- */}
                    <div id="social">
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
