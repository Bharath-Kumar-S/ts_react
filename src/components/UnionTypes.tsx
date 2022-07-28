import React from 'react'

type status = {
    state: 'success' | 'error' | 'loading'
}

const UnionTypes = ({state}: status) => {
  return (
    <div>unionTypes {state}</div>
  )
}

export default UnionTypes