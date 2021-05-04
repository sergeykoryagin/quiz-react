import React, {Component} from "react";
import styles from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz";


class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz: [
                {
                    answers:[
                        {text: 'Answer 1'},
                        {text: 'Answer 2'},
                        {text: 'Answer 3'},
                        {text: 'Answer 4'}
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <div className={styles.Quiz}>
                <div className={styles.QuizWrapper}>
                    <h1>Choose the correct answer</h1>
                    <ActiveQuiz answers={this.state.quiz[0].answers}/>
                </div>
            </div>
        )
    }
}

export default Quiz;