import React, {Component} from "react";
import styles from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";


class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFinished: false,
            results: {}, // {[questionId]: 'error'||'success'}
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
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (key === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion - 1]
        const results = {...this.state.results}

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results
            })



            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState(prevState => ({
                        activeQuestion: prevState.activeQuestion + 1,
                        answerState: null
                    }))
                }

                window.clearTimeout(timeout)
            }, 1000)


        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })
        }


    }

    handlerTryAgainClick = () => {
        this.setState({
            isFinished: false,
            results: {},
            activeQuestion: 1,
            answerState: null
        })
    }

    render() {
        return (
            <div className={styles.Quiz}>
                <div className={styles.QuizWrapper}>
                    <h1>Choose the correct answer</h1>
                    {this.state.isFinished
                        ? <FinishedQuiz
                            quiz={this.state.quiz}
                            results={this.state.results}
                            onTryAgainClick={this.handlerTryAgainClick}
                        />
                        : <ActiveQuiz
                            answers={this.state.quiz[this.state.activeQuestion - 1].answers}
                            question={this.state.quiz[this.state.activeQuestion - 1].question}
                            onAnswerClick={this.handlerAnswerClick}
                            activeQuestion={this.state.activeQuestion}
                            quizLength={this.state.quiz.length}
                            state={this.state.answerState}
                        />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz;