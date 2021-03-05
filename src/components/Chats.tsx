import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import { Chat } from './index'

type Props = {
  chats: Chats
}

const useStyles = makeStyles((theme: Theme) => (
  createStyles({
    chats: {
      height: 400,
      padding: 0,
      overflow: 'auto'
    }
  })
))

const Chats: React.FC<Props> = (props) => {
  const classes = useStyles()

  return (
    <List className={classes.chats} id={'scroll-area'}>
      {props.chats.map((chat, index) => {
        return <Chat text={chat.text} type={chat.type} key={index.toString()} />
      })}
    </List>
  )
}

export default Chats