
//@ts-check

import React, { Component } from 'react';
import './App.css';
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
// import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import logo from './Adam_logo.png';
import skyline from './skyline.png';
import pin from './maps-pin.png';
import html from './html.png';
import css from './css.png';
import js from './js.png';
import git from './git.png';
import react from './react-1.png';
import mui from './mui.png';
import npm from './npm.png';
import wordpress from './wordpress.jpg';
import menu from './menu.png';
import icon from './x-icon.png';
import github from './github-icon.png';
import linkedin from './linkedin-icon.png';
import facebook from './facebook-icon.png';


const styles = theme => ({
  appBar: {
    position: 'relative',
    backgroundColor:'#04536d',
    height: 128
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 1000,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
});


const cards = [
{key:1,image:"https://i.imgur.com/0AGbvX1.png",title:"Random Quote Generator",project:"Random Quote Generator",link:"https://adamjwright.com/quote_generator",about:"Displays a new quote when you press the new quote button and will tweet the quote for you."},
{key:2,image:"https://i.imgur.com/oiuRp3S.png",title:"React Drum Machine",project:"React Drum Machine",link:"https://adamjwright.com/drum_machine",about:"Plays a sound when you press the keyboard key or click the button for the displayed letter."},
{key:3,image:"https://i.imgur.com/IENvKLW.png",title:"React Markup Previewer",project:"React Markdown Previewer",link:"https://adamjwright.com/markdown_previewer",about:"Turns the entries into the box on the left into Git Flavored Markdown on the right."},
{key:4,image:"https://i.imgur.com/IHKRgap.png",title:"React Calculator",project:"React Calculator App",link:"https://adamjwright.com/react_calculator",about:"Modern style calculator application that is fully mobile responsive ."}
];  


function Album(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />

  {/* The top Nav Bar */}

    <AppBar position="static"   className={classes.appBar}>
      <Toolbar className={'barbar'}>
        <a className='darken' href='https://adamjwright.com'>
          <img src={logo} alt='logo'  className={'logogo'}/>
        </a>
           <div id='scroll-links'>
        <a variant="h6" href='https://adamjwright.com/blog' id='blog' className="underline"  noWrap>
              Blog
            </a>
      <Link activeClass="active" to="bottom-container" spy={true} smooth={true} offset={50} duration={550} delay={200}>
        <a variant="h6" href='#footer' id='about' className="underline" noWrap>
              About
            </a>
       </Link>
      <Link activeClass="active" to="full-stack" spy={true} smooth={true} offset={15} duration={550} delay={200}>
        <a variant="h6" href='#stack' id='projects' className="underline" noWrap>
             Projects
            </a>
       </Link>   
     </div>

  {/* Responsive menu component */}

            <div id='menu-container'>
                <a>
                   <TemporaryDrawer />
                </a>    
            </div>

      </Toolbar>
     </AppBar>

  {/* The skills section */}
 
      <main>
        <div className={classes.heroUnit}>
         <div className={classes.heroContent}>
          <div className={classes.heroButtons}>
              <Grid container  justify="center">
                <Grid id='icon-container' item xs={9} sm={9} md={9} lg={12}>

 {/* Grid of tech icons */}

          <a href='https://en.wikipedia.org/wiki/HTML'>
            <img className='tech-icon' id='html-icon' alt='html' src={html}/>
          </a>
          <a href='https://en.wikipedia.org/wiki/Cascading_Style_Sheets'>
            <img className='tech-icon' id='css-icon' alt='css' src={css}/>
          </a>
          <a href='https://en.wikipedia.org/wiki/JavaScript'>
            <img className='tech-icon' id='js-icon' alt='js' src={js} />
          </a>
          <a href='https://en.wikipedia.org/wiki/React_(JavaScript_library)'>
            <img className='tech-icon' id='react-icon' alt='react' src={react} />
          </a>
          <a href='https://material-ui.com/getting-started/installation/'>
            <img className='tech-icon' id='mui-icon' alt='mui' src={mui} />
          </a>
          <a href='https://en.wikipedia.org/wiki/Git'>
            <img className='tech-icon' id='git-icon' alt='git' src={git} />
          </a>
          <a href='https://en.wikipedia.org/wiki/Npm_(software)'>
            <img className='tech-icon' id='npm-icon' alt='npm' src={npm} />
          </a>
          <a href='https://en.wikipedia.org/wiki/WordPress'>
            <img className='tech-icon' id='wordpress-icon' alt='wordpress' src={wordpress} />
          </a>
      </Grid>
     </Grid>
    </div>
   </div>
  </div>


  <div className={classNames(classes.layout, classes.cardGrid)}>

{/* Full stack Project Card */}

    <div className='full-stack' id='stack'>

    <Grid container spacing={40} justify="center">
     <Grid item sm={6} md={6} lg={6}>
    
      <Card className={classes.card}>
      <a href='https://i.imgur.com/EXLZRSi.png'>
        <CardMedia
             className={classes.cardMedia}
             image={"https://i.imgur.com/tvwE6Yz.jpg"} 
             title="Amp Information Library"
           />
           </a>
             <CardContent className={classes.cardContent}>
               <Typography gutterBottom variant="h5" component="h2">
                      Amp Information Library
                 </Typography>
               <Typography>
                      A library where the user can sign in and add photos, schematics, settings, and other helpful information about electric guitar amplifiers.
            </Typography>
          </CardContent>
         </Card>
        </Grid>
       </Grid>
      </div>

 {/* Smaller Project Cards */}

      <div className='smaller-apps' >

          <Grid container spacing={40} >
            {cards.map(card => (
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
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.project}
                    </Typography>
                    <Typography>
                    {card.about}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
             ))}  
          </Grid>
          </div>
        </div>
      </main>

  {/* Footer */}

      <footer id='footer' className={classes.footer}>
        
  {/* The bottom of the page */}
      
         <div  className='bottom-container'>

  {/* About me section */}

      <div id='about-text'>
        <Typography variant="h6" align="center" id='me'gutterBottom>
          About Me
          </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          I am a Seattle based developer who is completing a computer science degree and looking to better at programming each and every day. I am focusing on web programming. If you would like to reach out to me then feel free to use the contact box or email adam@adamjwright.
          </Typography>
          <div id='social'>
          <a href='https://github.com/adam4321'><img id='github'src={github} /></a>
          <a href='https://www.linkedin.com/in/adamjw321/'><img id='linkedin'src={linkedin} /></a>
          <a href='https://www.facebook.com/adam.wright.10690203'><img id='facebook'src={facebook} /></a>
          </div>
      </div>

  {/* Contact Form */}

   
    <div className='contact'>
    <div id='contact-wrapper'>
        <form id="contactform" action="https://formspree.io/adam@adamjwright.com" method="POST">
         <label for="name" id='name' >Name</label>
              <br />
         <input type="text" name="first" id='first-in'/>
         <input type="text" name="last" id='last-in'/>
              <br />
           <label for="name" id='first' >First</label>
           <label for="name" id='last' >Last</label>
              <br />
           <label for="email" id='email' >Email</label>
              <br />
         <input type="email" name="_replyto" id='email-in' />
              <br />
           <label for="comments" id='comments'>Comment or Message</label>
              <br />
         <textarea name="message" id='comments-in'></textarea>
              <br />
         <input type="submit" value="SUBMIT" id='submit' />
         <input type="hidden" name="_next" value="https://adamjwright.com" />
        </form>
      </div>
    </div>

  {/* The skyline and location Pin */}

        <img src={skyline} alt='seatle skyline' className='skyline-img'/>
          <div className='overlay'>
          <a href='https://www.google.com/maps/place/1215+N+45th+St,+Seattle,+WA+98103/@47.6570521,-122.3612009,13.25z/data=!4m5!3m4!1s0x5490145167fe978d:0x64d3c93762b6dee3!8m2!3d47.6612275!4d-122.3430452' className='icon'>
        <img src={pin} alt='red location icon' id='red-pin'/>
          </a>
        </div>
      </div>   
     </footer>

  {/* End footer */}
      
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};


// The menu drawer component

class TemporaryDrawer extends React.Component {
  state = {
    left: false
     };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className='drawer'>
        <List id='menu-list'>
        <a className='no-under' onClick={this.toggleDrawer('left', false)}>
          <ListItem id='close'>
            <ListItemIcon id='close'>
              <img src={icon} alt='x icon' id='x-icon'/>
            </ListItemIcon >
              <p id='close-text'>CLOSE MENU</p>
            </ListItem>
         </a>
            <Divider className='divider'/>
        <a href='https://adamjwright.com/#stack'>
          <ListItem id='projects-link'>
              <p id='projects-link'>Projects</p>
          </ListItem>
         </a>
           <Divider className='divider' />
        <a href='https://adamjwright.com/#footer'>
          <ListItem id='about-link'>
              <p id='about-link'>About</p>
          </ListItem>
         </a>
           <Divider className='divider' />
        <a href='https://adamjwright.com/blog'>
          <ListItem id='blog-link'>
              <p id='blog-link'>Blog</p>
          </ListItem>
         </a>
           <Divider className='divider' />
        </List>
      </div>
    );

    return (
      <div>
          <div onClick={this.toggleDrawer('left', true)} id='menu-container'>
            <img src={menu} alt='menu'  className={'menu'}/>
              <p id='menu-text'>
                  Menu
              </p>
          </div>
         <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
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

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album,TemporaryDrawer);
              