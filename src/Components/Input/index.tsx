import React, { FC } from 'react'

import { IInputProps } from './interfaces'

import './styles.css'

const Input: FC<IInputProps> = ({ label, htmlFor, ...rest }) => {
  return (
    <div className="c-input">
      <label htmlFor={htmlFor}>{label}</label>
      <input {...rest} id={htmlFor} />
    </div>
  )
} 

export default Input