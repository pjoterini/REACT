import React from 'react'

interface IProps {
    component: {
        name: string,
        age: number
    }
} 

export default function Component({name, age}: IProps['component']) {

  return (
    <div>
    `in 5 years ${name} will be ${age + 5}`
    </div>
  )
}
