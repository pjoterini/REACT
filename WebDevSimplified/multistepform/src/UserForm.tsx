import React from 'react'
import { FormWrapper } from './FormWrapper'

type UserData = {
  firstName: string
  lastName: string
  age: string
}

type UserFormProps = UserData & { 
  updateFields: (fields: Partial<UserData>) => void
}

export const UserForm = ({firstName, lastName, age, updateFields}: UserFormProps) => {
  return (
    <FormWrapper title='User Details' >
    <label htmlFor="">First Name</label>
    <input type="text" autoFocus required value={firstName} onChange={e => {
      updateFields({firstName: e.target.value})
    }} />
    <label htmlFor="">Last Name</label>
    <input type="text " required value={lastName} 
    onChange={e => updateFields({lastName: e.target.value})} />
    <label htmlFor="">Age</label>
    <input type="number" required min={1} value={age} onChange={e => updateFields({age: e.target.value})}/>
    </ FormWrapper>
  )
}
