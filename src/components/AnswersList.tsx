import React from 'react'
import { Answer } from './index'

type Props = {
  answers: Answers
}

const AnswersList: React.FC<Props> = (props) => {
  return (
    <div className="c-grid__answer">
      {props.answers.map((answer, index) => {
        return <Answer content={answer.content} key={index.toString()} />
      })}
    </div>
  )
}

export default AnswersList