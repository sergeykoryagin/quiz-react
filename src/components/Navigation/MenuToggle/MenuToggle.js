import React from 'react';
import styles from './MenuToggle.module.css';

const MenuToggle = props => {
    const classes = [
        styles.MenuToggle,
        'fa'
    ]

    if (props.isOpen) {
        classes.push(styles.open)
        classes.push('fa-times')
    }else {
        classes.push('fa-bars')
    }


    return (
        <i
            className={classes.join(' ')}
            onClick={props.onMenuToggleClick}
        />
    )
}

export default MenuToggle;