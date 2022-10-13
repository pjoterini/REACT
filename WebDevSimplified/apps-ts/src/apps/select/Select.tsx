import React from 'react'
import styles from './select.module.css'

interface SelectOption {
    label: string
    value: any
}

interface SelectProps {
    options: SelectOption[]
    onChange: (value: SelectOption | undefined) => void
    value?: SelectOption
}

export default function Select({value, onChange, options}: SelectProps) {
  return (
    <div className={styles.container}>
        <span className={styles.value}>Value</span>
        <button className={styles['clear-btn']}>&times;</button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        <ul className={styles.options}>
            {options.map(option => {
                <li key={option.label} className={styles.option}>{option.label}</li>
            })}
        </ul>
    </div>
  )
}
