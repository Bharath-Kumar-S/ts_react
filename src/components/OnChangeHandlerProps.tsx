import React from 'react'

type handleInputType = {
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void 
}

const OnChangeHandlerProps = ({handleOnChange}: handleInputType) => {
  return (
    <input onChange={(event)=>handleOnChange(event)}/>
  )
}

export default OnChangeHandlerProps