import React from 'react'
import TextField from '@material-ui/core/TextField'

type Props = {
  name: string
  label: string
  multiline: boolean
  rows: number
  value: string
  type: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput: React.FC<Props> = (props) => {
  return (
    <TextField
      fullWidth={true}
      label={props.label}
      margin={'dense'}
      multiline={props.multiline}
      rows={props.rows}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
    />
  )
}

export default TextInput