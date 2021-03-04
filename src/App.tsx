import React from 'react';
import './assets/styles/style.css';
import defaultDataset from './dataset'

interface Props {}

interface State {
  answers: any[],
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

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          {this.state.currentId}
        </div>
      </section>
    )
  }
}
