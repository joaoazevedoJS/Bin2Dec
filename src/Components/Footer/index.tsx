import React, { FC } from 'react'

import './styles.css'

const Footer: FC = ({ children }) => {
  return (
    <footer className="c-footer">
      {children}
    </footer>
  )
}

export default Footer