import React, {Component} from "react";
import styles from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz";


class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz: [
                {
                    question: 'Lol?',
                    theRightAnswerId: 2,
                    answers: [
                        {id: 1, text: 'Answer 1'},
                        {id: 2, text: 'Answer 2'},
                        {id: 3, text: 'Answer 3'},
                        {id: 4, text: 'Answer 4'}
                    ]
                }
            ]
        }
    }

    handlerAnswerClick = id => {
        console.log(id);
    }

    render() {
        return (
            <div className={styles.Quiz}>
                <div className={styles.QuizWrapper}>
                    <h1>Choose the correct answer</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[0].answers}
                        onAnswerClick={this.handlerAnswerClick}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;