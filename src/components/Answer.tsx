import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

type Props = {
  content: string
  nextId: string
  select: (selectedAnswer: string, nextQuestionId: string) => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      borderColor: '#FFB549',
      color: '#FFB549',
      fontWeight: 600,
      marginBottom: '8px',
      '&:hover': {
        backgroundColor: '#FFB549',
        color: '#fff'
      }
    }
  })
)

const Answer: React.FC<Props> = (props) => {
  const classes = useStyles()
  console.log(classes)
  return (
    <Button
      className={classes.button}
      variant="outlined"
      onClick={() => props.select(props.content, props.nextId)}
    >
      {props.content}
    </Button>
  )
}

export default Answer