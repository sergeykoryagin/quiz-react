import React from 'react';
import styles from './FinishedQuiz.module.css'

const FinishedQuiz = () => {
    return <div className={styles.FinishedQuiz}>
        <ul>
            <li>
                <strong>1. </strong>
                Lol?
                <i className={'fa fa-times ' + styles.error}/>
            </li>
            <li>
                <strong>2. </strong>
                2+3
                <i className={'fa fa-check ' + styles.success}/>
            </li>
        </ul>
        <p>Correct answers <strong>4/10</strong></p>

        <div>
            <button>Try again</button>
        </div>
    </div>
}

export default FinishedQuiz;