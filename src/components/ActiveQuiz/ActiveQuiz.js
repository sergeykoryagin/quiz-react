import React from 'react';
import styles from './ActiveQuiz.module.css'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = (props) => {
    return (
        <div className={styles.ActiveQuiz}>
            <p className={styles.Question}>
                <span>
                    <strong>{props.activeQuestion}) </strong>
                    {props.question}
                </span>
                <small>{props.activeQuestion} of {props.quizLength}</small>
            </p>


            <AnswersList
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
                state={props.state}
            />
        </div>
    )
}

export default ActiveQuiz;