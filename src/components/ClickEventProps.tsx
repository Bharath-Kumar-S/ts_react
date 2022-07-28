import React from 'react'

type btnprop = {
    btn : (event: React.MouseEvent<HTMLButtonElement, MouseEvent>,id: number) => void
}

const ClickEventProps = ({btn}:btnprop) => {
  return (
    <button onClick={(event)=>btn(event,1)}>Props Click</button>
  )
}

export default ClickEventProps