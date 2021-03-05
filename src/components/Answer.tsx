import React from 'react'
import Button from '@material-ui/core/Button'

type Props = {
  content: string
  nextId: string
  select: (selectedAnswer: string, nextQuestionId: string) => void
}

const Answer: React.FC<Props> = (props) => {
  return (
    <Button variant="contained" color="primary" onClick={() => props.select(props.content, props.nextId)}>
      {props.content}
    </Button>
  )
}

export default Answer