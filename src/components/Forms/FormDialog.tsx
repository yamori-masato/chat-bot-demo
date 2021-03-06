import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextInput from './TextInput'

type Props = {
  open: boolean
  handleClose: () => void
}
type State = {
  name: string
  email: string
  description: string
}

export default class FormDialog extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      description: ''
    }
    this.inputName = this.inputName.bind(this)
    this.inputEmail = this.inputEmail.bind(this)
    this.inputDescription = this.inputDescription.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  inputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value })
  }
  inputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value })
  }
  inputDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ description: e.target.value })
  }
  submitForm = () => {
    const { name, email, description } = this.state
    alert('送信しました')
    this.setState({
      name: '',
      email: '',
      description: ''
    })
    return this.props.handleClose()
  }

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
        <DialogContent>
          <TextInput
            name={'name'}
            label={'お名前(必須)'}
            multiline={false}
            rows={1}
            value={this.state.name}
            type={'text'}
            onChange={this.inputName}
          />
          <TextInput
            name={'email'}
            label={'メールアドレス(必須)'}
            multiline={false}
            rows={1}
            value={this.state.email}
            type={'email'}
            onChange={this.inputEmail}
          />
          <TextInput
            name={'description'}
            label={'お問い合わせ内容(必須)'}
            multiline={true}
            rows={5}
            value={this.state.description}
            type={'text'}
            onChange={this.inputDescription}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={this.submitForm} color="primary" autoFocus>
            送信する
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}
