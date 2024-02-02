/**************************************************************************** 
**  Smaller Projects maps the SMALL_PROJ_CARDS object into 4 card 
**  components 
****************************************************************************/

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import amp_library_screenshot from './images/amp-library-screenshot.jpg';
import drum_machine_screenshot from './images/drum-machine-screenshot.jpg';
import maze_game_screenshot from './images/maze_game_screenshot.png';
import weather_screenshot from './images/weather_app.png';


// Object holding the information for the 4 smaller project cards
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

const SmallerProjects = (props) => {
    const {classes} = props;

    return (
        <>
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
        </>
    )
}

export default SmallerProjects;
