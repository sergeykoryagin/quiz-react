import React from 'react';
import styles from './ActiveQuiz.module.css'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = (props) => {
    return (
        <div className={styles.ActiveQuiz}>
            <p className={styles.Question}>
                <span>
                    <strong>2. </strong>
                    Lol?
                </span>
                <small>4 of 12</small>
            </p>


            <AnswersList
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
            />
        </div>
    )
}

export default ActiveQuiz;