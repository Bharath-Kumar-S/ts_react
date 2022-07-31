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

const users = [
  {
    first: "Bharath",
    last: "Kumar",
  },
];

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
