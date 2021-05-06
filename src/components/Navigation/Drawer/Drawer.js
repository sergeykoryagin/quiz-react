import React from 'react';
import styles from './Drawer.module.css';

const links = [
    1, 2, 3
]

class Drawer extends React.Component {

    renderLinks() {
        return links.map((link, index) => {
            return <li key={index}>
                <a>Link {link}</a>
            </li>
        })
    }

    render() {
        const classes = [styles.Drawer]

        if (!this.props.isOpen) {
            classes.push(styles.closed)
        }

        return (
            <nav className={classes.join(' ')}>
                <ul>
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }
}

export default Drawer;