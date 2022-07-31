import React, {useRef} from 'react'

const RefHook = () => {

    const inputRef = useRef<any>(null)

    const focusInput = () => {
        inputRef.current.focus()
    }

    return (
        <>
            <input ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    )
}

export default RefHook