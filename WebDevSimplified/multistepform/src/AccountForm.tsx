import React from 'react'
import { FormWrapper } from './FormWrapper'

type AccountData = {
  email: string
  password: string
}

type AccountFormProps = AccountData & { 
  updateFields: (fields: Partial<AccountData>) => void
}

export const AccountForm = ({email, password, updateFields}: AccountFormProps) => {
  return (
    <FormWrapper title='Account Form'>
    <label htmlFor="">Email</label>
    <input type="email" autoFocus required value={email} onChange={e => {
      updateFields({email: e.target.value})
    }} />
    <label htmlFor="">Password</label>
    <input type="password" required value={password} onChange={e => {
      updateFields({password: e.target.value})
    }} />
    </FormWrapper>
  )
}
