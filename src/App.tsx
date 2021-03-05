import React from 'react';
import './assets/styles/style.css';
import defaultDataset from './dataset'
import { AnswersList } from './components'

interface Props {}

interface State {
  answers: Answers,
  chats: any[],
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

  componentDidMount() {
    this.initAnswer()
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <AnswersList answers={this.state.answers} />
        </div>
      </section>
    )
  }
}
