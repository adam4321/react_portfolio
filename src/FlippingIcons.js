/******************************************************************************
**  Description: Icon grid component where clicking and icon flips it on its
**  Y axis to show what looks like its back side, but is a second image which
**  begins being displayed when the original image is hidden at 90deg of 
**  rotation.
******************************************************************************/

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

// The flipping image
const FlippingIcons = () => {

    return (
        <>
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
        </>
    )
}

export default FlippingIcons;
