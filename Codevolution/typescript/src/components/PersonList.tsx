import React from 'react'

type PersonListProps = {
    names: {
        first: string
    }[]
}

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
       {props.names.map(name => {
        return (
            <h2 key={name.first}>{name.first}</h2>
        )
       })}
    </div>
  )
}
