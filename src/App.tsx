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
  }

  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId]
    const initAnswers = initDataset.answers

    this.setState({
      answers: initAnswers
    })
  }

  initChats = () => {
    const initDataset = this.state.dataset[this.state.currentId]
    const chat: Chat = {
      text: initDataset.question,
      type: 'question'
    }

    const chats = this.state.chats
    chats.push(chat)

    this.setState({
      chats: chats
    })
  }

  componentDidMount() {
    this.initAnswer()
    this.initChats()
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={ this.state.chats }/>
          <AnswersList answers={this.state.answers} />
        </div>
      </section>
    )
  }
}
