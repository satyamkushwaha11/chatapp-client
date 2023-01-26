import React, { useEffect } from 'react'
import ifToken from '../helper/token'

const Layout = (props) => {
  useEffect(() => {
    if (!ifToken()) {
      navigate('/login')
    }
  })
  return (
    <>
      {props.children}
    </>
  )
}

export default Layout