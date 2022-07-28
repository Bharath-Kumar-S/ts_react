import React from 'react'

type optionalType = {
    msg ?: string 
} 

const OptionalProps = ({msg}: optionalType) => {
  return (
    <div>This component contains OptionalProps{msg}</div>
  )
}

export default OptionalProps