import React from 'react';
import styles from './ActiveQuiz.module.css'

const ActiveQuiz = () => {
    return (
        <div className={styles.ActiveQuiz}>
            <p className={styles.Question}>
                <span>
                    <strong>2. </strong>
                    Лол?
                </span>
                <small>4 из 12</small>
            </p>


            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    )
}

export default ActiveQuiz;