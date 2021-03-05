import React from 'react';
import './assets/styles/style.css';
import defaultDataset from './dataset'
import { AnswersList, Chats } from './components'

interface Props {}

interface State {
  answers: Answers,
  chats: Chats,
  currentId: string,
  dataset: Dataset,
  open: boolean
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
    this.selectAnswer = this.selectAnswer.bind(this)
  }

  displayNextQuestion = (nextQuestionId: string) => {
    const chats = this.state.chats
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question'
    })

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId
    })
  } 

  selectAnswer = (selectedAnswer: string, nextQuestionId: string) => {
    switch (nextQuestionId) {
      case 'init':
        this.displayNextQuestion(nextQuestionId)
        break
      default:
        const chats = this.state.chats
        chats.push({
          text: selectedAnswer,
          type: 'answer'
        })
    
        this.setState({
          chats: chats
        })

        this.displayNextQuestion(nextQuestionId)
    }
  }

  componentDidMount() {
    const initAnswer = ''
    this.selectAnswer(initAnswer, this.state.currentId)
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={ this.state.chats }/>
          <AnswersList answers={this.state.answers} select={this.selectAnswer} />
        </div>
      </section>
    )
  }
}
