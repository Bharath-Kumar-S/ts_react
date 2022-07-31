import React, { useContext } from 'react';

import { UserContexts } from "../App"

const ContextHook = () => {

    const {first, last} = useContext(UserContexts);

    return (
        <div>
            {first} {last}
        </div>
    )
}

export default ContextHook