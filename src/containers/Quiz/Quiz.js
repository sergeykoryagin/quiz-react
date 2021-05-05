import React, {Component} from "react";
import styles from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz";


class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeQuestion: 1,
            answerState: null, // {[answerId]: 'error'||'success'}
            quiz: [
                {
                    id: 1,
                    question: 'Lol?',
                    rightAnswerId: 2,
                    answers: [
                        {id: 1, text: 'Answer 1'},
                        {id: 2, text: 'Answer 2'},
                        {id: 3, text: 'Answer 3'},
                        {id: 4, text: 'Answer 4'}
                    ]
                },
                {
                    id: 2,
                    question: '2 + 3',
                    rightAnswerId: 3,
                    answers: [
                        {id: 1, text: '4'},
                        {id: 2, text: '6'},
                        {id: 3, text: '5'},
                        {id: 4, text: '7'}
                    ]
                },
            ]
        }
    }

    isQuizFinished = () => {
        return this.state.activeQuestion === this.state.quiz.length
    }

    handlerAnswerClick = answerId => {
        console.log(answerId);

        const question = this.state.quiz[this.state.activeQuestion - 1]

        if (question.rightAnswerId === answerId) {
            if (this.state.answerState) {
                const key = Object.keys(this.state.answerState)[0]
                if (key === 'success') {
                    return
                }
            }

            this.setState({
                answerState: {[answerId]: 'success'}
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log('Finished')
                } else {
                    this.setState(prevState => ({
                        activeQuestion: prevState.activeQuestion + 1,
                        answerState: null
                    }))
                }

                window.clearTimeout(timeout)
            }, 1000)


        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }


    }


    render() {
        return (
            <div className={styles.Quiz}>
                <div className={styles.QuizWrapper}>
                    <h1>Choose the correct answer</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion - 1].answers}
                        question={this.state.quiz[this.state.activeQuestion - 1].question}
                        onAnswerClick={this.handlerAnswerClick}
                        activeQuestion={this.state.activeQuestion}
                        quizLength={this.state.quiz.length}
                        state={this.state.answerState}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;