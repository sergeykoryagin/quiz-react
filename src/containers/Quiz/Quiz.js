import React, {Component} from "react";
import styles from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz";


class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz: []
        }
    }

    render() {
        return (
            <div className={styles.Quiz}>
                <div className={styles.QuizWrapper}>
                    <h1>Quiz</h1>
                    <ActiveQuiz/>
                </div>
            </div>
        )
    }
}

export default Quiz;