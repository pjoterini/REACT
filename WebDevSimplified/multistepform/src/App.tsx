import { FormEvent, useState } from "react"
import { AccountForm } from "./AccountForm"
import { AdressForm } from "./AdressForm"
import { useMultistepForm } from "./useMultistepForm"
import { UserForm } from "./UserForm"

type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string,
  zip: string,
  email: string
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: ''
}

function App () {
  const [data, setData] = useState(INITIAL_DATA)

  function updateFields(fields: Partial<FormData>) {
  setData(prev => {
    return {...prev, ...fields} 
  })}

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert('Successful account creation')
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next} = useMultistepForm([
    <UserForm {...data} updateFields={updateFields}/>,
    <AccountForm {...data} updateFields={updateFields}/>, 
    <AdressForm {...data} updateFields={updateFields}/>

  ])

  return (
  <div style={{
      position: 'relative',
      background: 'white',
      border: '1px solid black',
      padding: '2rem',
      margin: '1rem',
      borderRadius: '.5rem',
      fontFamily: 'Arial'
  }}>
    <form action="" onSubmit={onSubmit}>
      <div style={{ position: 'absolute', top: '.5rem', right: '.5rem'}}>
        {currentStepIndex + 1} / {steps.length}
      </div>
      {step}
      <div style={{
        marginTop: '1rem',
        display: 'flex',
        gap: '.5rem',
        justifyContent: 'flex-end'
      }}>

      </div>
      {!isFirstStep && <button type="button" onClick={back}>Back</button>}
      <button type="submit">
      {isLastStep ? 'Finish' : 'Next'}  
      </button>
    </form>
  </div>
  ) 
}

export default App
