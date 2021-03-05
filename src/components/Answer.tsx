import React from 'react'
import Button from '@material-ui/core/Button'

type Props = {
  content: string
}

const Answer: React.FC<Props> = (props) => {
  return (
    <Button variant="contained" color="primary">
      {props.content}
    </Button>
  )
}

export default Answer