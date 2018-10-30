
//@ts-check

import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
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
import wordpress from './WordPress.png';






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


const cards = [1, 2, 3, 4];


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
          <a variant="h6" href='#projects' id='projects' className="underline" noWrap>
            Projects
          </a>
          </div>
        </Toolbar>
      </AppBar>

    {/* The first section */}

      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>

            <Typography component="h3" variant="h3" align="left" color="textPrimary" gutterBottom>
              Skills
            </Typography>

    {/* Grid of tech icons */}
       <div id='icon-container'>
            <img className='tech-icon' id='html-icon' src={html}/>
            <img className='tech-icon' id='css-icon' src={css}/>
            <img className='tech-icon' id='js-icon' src={js} />
            <img className='tech-icon' id='git-icon' src={git} />
            <img className='tech-icon' id='react-icon' src={react} />
            <img className='tech-icon' id='mui-icon' src={mui} />
            <img className='tech-icon' id='npm-icon' src={npm} />
            <img className='tech-icon' id='wordpress-icon' src={wordpress} />
       </div>

            {/* <Typography variant="h6" align="center" color="textSecondary" paragraph>
              This will be a grid of icons that will represent the technologies that I have worked with.
            </Typography> */}
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  {/* <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button> */}
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>

    {/* End hero unit */}
    
    {/* <Card className=''>
    <CardMedia
                    className={classes.cardMedia}
                    image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                    title="Image title"
                  />
    <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Project
                    </Typography>
                    <Typography>
                      This will be a description of each of these portfolio projects.
                    </Typography>
                  </CardContent>
<Card /> */}

          <Grid container spacing={40}>
          
            {cards.map(card => (
              <Grid item key={card} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Project
                    </Typography>
                    <Typography>
                      This will be a description of each of these portfolio projects.
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>

    {/* Footer */}

      <footer id='footer' className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          About Me
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          I am a Seattle based developer who is looking to better at programming every day.

    {/* Contact Form */}
  
      <div className='contact'>
        
   <form id="contactform" action="https://formspree.io/adam@adamjwright.com" method="POST">
      <label for="name">Name</label>
         <br />
    <input type="text" name="first" />
    <input type="text" name="last" />
         <br />
      <label for="name">First</label>
      <label for="name">Last</label>
         <br />
      <label for="email">Email</label>
         <br />
    <input type="email" name="_replyto"  />
         <br />
       <label for="comments">Comment or Message</label>
         <br />
    <textarea name="message" ></textarea>
         <br />
    <input type="submit" value="Submit" />
    <input type="hidden" name="_next" value="https://adamjwright.com" />
   </form>
       </div>

   {/* The bottom of the page */}
      
         <div  className='container'>
          <img src={skyline} alt='seatle skyline' className='fix'/>
          <div className='overlay'>
          <a href='https://www.google.com/maps/@47.660009,-122.3425584,15z' className='icon'>
          <img src={pin} alt='red location icon' id='red-pin'/>
          </a>
            </div>
          </div>
        </Typography>
       
        
        
      </footer>

      {/* End footer */}
      
    </React.Fragment>
  );
}



Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);

