import React from 'react'

type childernProp = {
    children :React.ReactNode
}

const ChildernPropTypes = ({children}:childernProp) => {
  return (
    <div>{children}</div>
  )
}

export default ChildernPropTypes