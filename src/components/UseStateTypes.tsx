import React, { useState } from "react";

const UseStateObjectTypes = () => {
    type UserType = {
        name: string;
        id: number;
        topper: boolean;
    };

    const [user, setUser] = useState<UserType>({
        name: "Ramya",
        id: 304,
        topper: true,
    });

    return <>useStateObjectTypes
        <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setUser((prev) => { return { name: event.target.value, id: prev?.id, topper: prev?.topper } }
            )
        }} />

        {user?.id}{user?.name}{user?.topper}
    </>;
};

const UseStateTypes = () => {
    type inputMsg = string;

    const [msg, setMsg] = useState<null | inputMsg | undefined>(null);

    const handleButtonClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMsg(event.target.value);
    };

    return (
        <>
            useStateTypes
            <input onChange={(event) => handleButtonClick(event)} />
            <section>{msg}</section>
            <UseStateObjectTypes />
        </>
    );
};

export default UseStateTypes;
