
//@ts-check

import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
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
  },
});



const cards = [
{key:1,image:"https://i.imgur.com/7MfMVOs.png",title:"Random Quote Machine",project:"Random Quote Machine",about:"Displays a new quote when you press the button and is just generally very very cool."},
{key:2,image:"https://i.imgur.com/OMTqyYd.png",title:"React Drum Machine",project:"React Drum Machine",about:"Plays sounds when you press the key or click the button and is just generally very cool."},
{key:3,image:"https://i.imgur.com/EXLZRSi.png",title:"React Drum Machine",project:"React Calculator App",about:"Plays sounds when you press the key or click the button and is just generally very cool."},
{key:4,image:"https://i.imgur.com/EXLZRSi.png",title:"React Drum Machine",project:"React Pomodoro Timer",about:"Plays sounds when you press the key or click the button and is just generally very cool."}
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
            <a variant="h6" href='#footer' id='about' className="underline" noWrap>
            About
          </a>
            <a variant="h6" href='#stack' id='projects' className="underline" noWrap>
            Projects
          </a>
         </div>
      </Toolbar>
     </AppBar>

  {/* The skills section */}

      <main>
  {/* Hero unit */}

        <div className={classes.heroUnit}>
       <div className={classes.heroContent}>
      <div className={classes.heroButtons}>
              <Grid container  justify="center">
                <Grid item xs={9} sm={9} md={9} lg={12}>

 {/* Grid of tech icons */}

       <div id='icon-container'>
          <a href='https://en.wikipedia.org/wiki/HTML'>
            <img className='tech-icon' id='html-icon' alt='html' src={html}/>
          </a>
          <a href='https://en.wikipedia.org/wiki/Cascading_Style_Sheets'>
            <img className='tech-icon' id='css-icon' alt='css' src={css}/>
          </a>
          <a href='https://en.wikipedia.org/wiki/JavaScript'>
            <img className='tech-icon' id='js-icon' alt='js' src={js} />
          </a>
          <a href='https://en.wikipedia.org/wiki/Git'>
            <img className='tech-icon' id='git-icon' alt='git' src={git} />
          </a>
          <a href='https://en.wikipedia.org/wiki/React_(JavaScript_library)'>
            <img className='tech-icon' id='react-icon' alt='react' src={react} />
          </a>
          <a href='https://material-ui.com/getting-started/installation/'>
            <img className='tech-icon' id='mui-icon' alt='mui' src={mui} />
          </a>
          <a href='https://en.wikipedia.org/wiki/Npm_(software)'>
            <img className='tech-icon' id='npm-icon' alt='npm' src={npm} />
          </a>
          <a href='https://en.wikipedia.org/wiki/WordPress'>
            <img className='tech-icon' id='wordpress-icon' alt='wordpress' src={wordpress} />
          </a>
       </div>
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
      <a href='https://www.youtube.com/watch?v=RlXdsyctD50'>
        <CardMedia
             className={classes.cardMedia}
             image={"https://i.imgur.com/EXLZRSi.png"} 
             title="Full Stack App"
           />
           </a>
             <CardContent className={classes.cardContent}>
               <Typography gutterBottom variant="h5" component="h2">
                      Full Stack App
                 </Typography>
               <Typography>
                      This will be a description of a full stack app that is my most involved project by far.
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
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image} 
                    title={card.title}
                  />
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
          I am a Seattle based developer who is completing a computer science degree and looking to better at programming every day.
          </Typography>
      </div>

  {/* Contact Form */}
 
    <div className='contact'>
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

export default withStyles(styles)(Album);

