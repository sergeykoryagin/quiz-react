import React from 'react';
import styles from './FinishedQuiz.module.css';
import Button from './../UI/Button/Button'

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)

    return <div className={styles.FinishedQuiz}>
        <ul>
            {props.quiz.map((quizItem, index) => {
                const classes = [
                    'fa',
                    props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                    styles[props.results[quizItem.id]]
                ]
                return <li key={index}>
                    <strong>{quizItem.id}. </strong>
                    {quizItem.question}
                    <i className={classes.join(' ')}/>
                </li>
            })}
        </ul>
        <p>Correct answers <strong>{successCount}/{props.quiz.length}</strong></p>

        <div>
            <Button onClick={props.onTryAgainClick} type={'primary'}>Try again</Button>
            <Button type={'success'}>Show the test list</Button>
        </div>
    </div>
}

export default FinishedQuiz;