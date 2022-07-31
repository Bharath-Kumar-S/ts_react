import "./App.css";
import ChildernPropTypes from "./components/ChildernPropTypes";
import ClickEventProps from "./components/ClickEventProps";
import Greet from "./components/Greet";
import HookReducer from "./components/HookReducer";
import OnChangeHandlerProps from "./components/OnChangeHandlerProps";
import OptionalProps from "./components/OptionalProps";
import StylePropTypes from "./components/StylePropTypes";
import Types from "./components/Types";
import UnionTypes from "./components/UnionTypes";
import User from "./components/User";
import UseStateTypes from "./components/UseStateTypes";

import { createContext, useState } from "react";
import ContextHook from "./components/ContextHook";
import RefHook from "./components/RefHook";

const users = [
  {
    first: "Bharath",
    last: "Kumar",
  },
];

type UserType = {
  first: string
  last: string
}

export const UserContexts = createContext({first: '', last: ''});

function App() {

  const [UserState, setUserState] = useState<UserType>({ first: '', last: '' }) 


  return (
    <UserContexts.Provider value={UserState}>
    <div className="App" >
      <Greet name="Ramya" />
      <User fname="Ramya" lname="Shanmugam" isUser={true} />
      <Types name={users} />
      <UnionTypes state="success" />
      <ChildernPropTypes>Childern props</ChildernPropTypes>
      <ChildernPropTypes><Types name={users} /></ChildernPropTypes>
      <OptionalProps msg="Hi" />
      <OptionalProps />
      <ClickEventProps btn={(event, id) => {
        console.log(event, id)
      }} />
      <OnChangeHandlerProps handleOnChange={(event) => {
        console.log(event)
      }} />
      <StylePropTypes style={{ display: "block", color: "black", fontWeight: "bold" }} />
      <UseStateTypes />
      <br/>
      <HookReducer />
      <RefHook />
      <ContextHook />
        <label>First Name</label>
        <input onChange={(e) => setUserState((prev)=>{ return {first: `${e.target.value}`, last: prev?.last }})}/>
        <label>Last Name</label>
        <input onChange={(e) => setUserState((prev) => { return { first: prev?.first, last: `${e.target.value}` } })} />
    </div>
    </UserContexts.Provider>
  );
}

export default App;
