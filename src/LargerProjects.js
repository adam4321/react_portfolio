/**************************************************************************** 
**  Larger Projects maps the LARGE_PROJ_CARDS object into 4 card 
**  components 
****************************************************************************/

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import quiz_screenshot from './images/quiz_screenshot.png';
import bug_tracker_screenshot from './images/bug_tracker_screenshot.png';


// Object holding the information for the two upper project cards
const LARGE_PROJ_CARDS = [
    {
        key: 1,
        image: quiz_screenshot,
        title: 'QuizSoft Quiz Builder',
        project: 'QuizSoft Quiz Builder',
        link: 'https://adamjwright.com/quiz_soft/intro',
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

const LargerProjects = (props) => {
    const {classes} = props;

    return (
        <>
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
        </>
    )
}

export default LargerProjects;
