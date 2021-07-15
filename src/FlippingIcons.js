/******************************************************************************
**  Description: Icon grid component where clicking and icon flips it on its
**  Y axis to show what looks like its back side, but is a second image which
**  begins being displayed when the original image is hidden at 90deg of 
**  rotation.
******************************************************************************/

import { useState } from 'react';

import /* webpackPrefetch: true */ html from './images/html.png';
import /* webpackPrefetch: true */ css from './images/css.png';
import /* webpackPrefetch: true */ js from './images/js.png';
import /* webpackPrefetch: true */ git from './images/git.png';
import /* webpackPrefetch: true */ react from './images/react-1.png';
import /* webpackPrefetch: true */ node from './images/node-js-icon.png';
import /* webpackPrefetch: true */ mysql from './images/mysql-icon.png';
import /* webpackPrefetch: true */ java from './images/java_icon.png';

// Array of objects holding the data for grid of tech skills icons below ------
const TECH_ICONS_DATA = [
    {
        href: 'https://en.wikipedia.org/wiki/HTML',
        className: 'tech-icon image',
        id: 'html-icon',
        linktext: 'HTML - Wikipedia',
        alt: 'html',
        src: html,
        cardText: 'Html is the skeleton that all web applications are built upon.',
        width: "166",
        height: "166"
    },
    {
        href: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets',
        className: 'tech-icon image',
        id: 'css-icon',
        linktext: 'CSS - Wikipedia',
        alt: 'css',
        src: css,
        cardText: 'CSS is the styling that makes an application feel modern.',
        width: "160",
        height: "160"
    },
    {
        href: 'https://en.wikipedia.org/wiki/JavaScript',
        className: 'tech-icon image',
        id: 'js-icon',
        linktext: 'JavaScript - Wikipedia',
        alt: 'js',
        src: js,
        cardText: 'JavaScript is the programming language built into the browser.',
        width: "155",
        height: "155"
    },
    {
        href: 'https://en.wikipedia.org/wiki/React_(JavaScript_library)',
        className: 'tech-icon image',
        id: 'react-icon',
        linktext: 'React - Wikipedia',
        alt: 'react',
        src: react,
        cardText: 'React is a library to write HTML and JavaScript together.',
        width: "161",
        height: "161"
    },
    {
        href: 'https://en.wikipedia.org/wiki/Java_(programming_language)',
        className: 'tech-icon image',
        id: 'java-icon',
        linktext: 'Java - Wikipedia',
        alt: 'Java',
        src: java,
        cardText: 'Java is a robust and battle-tested server-side language.',
        width: "162",
        height: "163"
    },
    {
        href: 'https://en.wikipedia.org/wiki/Node.js',
        className: 'tech-icon image',
        id: 'node-icon',
        linktext: 'Node - Wikipedia',
        alt: 'node',
        src: node,
        cardText: 'Node allows JavaScript to be run server-side to benefit from its single-threaded speed.',
        width: "192",
        height: "192"
    },
    {
        href: 'https://en.wikipedia.org/wiki/MySQL',
        className: 'tech-icon image',
        id: 'mysql-icon',
        linktext: 'MySql - Wikipedia',
        alt: 'mysql',
        src: mysql,
        cardText: 'MySql is a relational database that is popular and reliable.',
        width: "162",
        height: "162"
    },
    {
        href: 'https://en.wikipedia.org/wiki/Git',
        className: 'tech-icon image',
        id: 'git-icon',
        linktext: 'Git - Wikipedia',
        alt: 'git',
        src: git,
        cardText: 'Git is the obvious choice for storing and managing versions of software.',
        width: "131",
        height: "131"
    }
];


// Single Flipping Card
const IconCard = (props) => {
    const [flipState, setFlipState] = useState(null);
    
    const updateFlipState = (e) => {
        e.preventDefault();
        flipState === 1 ? setFlipState(2) : setFlipState(1);
    }

    return ( 
        <>
            <img 
                onClick={updateFlipState}
                flipstate={flipState}
                alt={props.alt}
                {...props}
            />
            <div
                id={`back-${props.id}`}
                onClick={updateFlipState}
                flipstate={flipState}
                className={'backOfCard'}
            >
                {props.cardtext}
                <a
                    href={props.href}
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = props.href;
                    }}
                >
                    {props.linktext}
                </a>
            </div>
        </>
    )
}

// The Group of Flipping Cards
const FlippingIcons = () => {
    return (
        <>
            {TECH_ICONS_DATA.map((data, index) => (
                <IconCard 
                    key={index}
                    className={data.className}
                    linktext={data.linktext}
                    id={data.id}
                    src={data.src}
                    href={data.href}
                    width={data.width}
                    height={data.height}
                    cardtext={data.cardText}
                />
            ))}
        </>
    )
}

export default FlippingIcons;
