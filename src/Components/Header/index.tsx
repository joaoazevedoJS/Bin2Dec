import React, { FC } from 'react'

import './styles.css'

const Header: FC = ({ children }) => {
  return (
    <header className="c-header">
      {children}
    </header>
  )
}

export default Header