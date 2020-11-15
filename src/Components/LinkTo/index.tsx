import React, { FC, useEffect, useState } from 'react'

import { ILinkProps } from './interfaces'

import './styles.css'

const LinkTo: FC<ILinkProps> = ({ url, children }) => {
  const [site, setSite] = useState('')

  useEffect(() => {
    const containsHttp = containsHttpInURL(url)
    
    setSite(containsHttp ? url : `https://${url}`)
  }, [url])

  function containsHttpInURL(url: string): boolean {
    const containsHttpInURL = url.match(/https?:\/\//i)

    return !!containsHttpInURL
  }

  return (
    <a href={site} className="c-LinkTo" target="_blank" rel="noopener noreferrer">{children}</a>
  )
}

export default LinkTo