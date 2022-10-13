import React, { useState } from 'react'
import { IState as Props } from '../App'

interface IProps {
    people: Props['people'],
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

    const [input, setInput] = useState({
        name: '',
        age: '',
        note: '',
        img: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        console.log(input)
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if ( !input.name || !input.age || !input.img ) {
            return 
        } 

        setPeople([
            ...people, 
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                note: input.note
            }
        ])
    }

  return (
    <div className='AddToList'>
        <input type="text" placeholder='name' name='name' className='AddToList-input' value={input.name} onChange={handleChange}/>
        <input type="number" placeholder='age' name='age' className='AddToList-input' value={input.age} onChange={handleChange}/>
        <input type="text" placeholder='url' name='img' className='AddToList-input' value={input.img} onChange={handleChange}/>
        <textarea placeholder='note' name='note' className='AddToList-input' value={input.note} onChange={handleChange}/>
        <button className='AddToList-btn' onClick={handleClick}>Add to List</button>
    </div>
  )
}

export default AddToList