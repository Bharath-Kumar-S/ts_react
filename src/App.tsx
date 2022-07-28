import "./App.css";
import ChildernPropTypes from "./components/ChildernPropTypes";
import ClickEventProps from "./components/ClickEventProps";
import Greet from "./components/Greet";
import OnChangeHandlerProps from "./components/OnChangeHandlerProps";
import OptionalProps from "./components/OptionalProps";
import Types from "./components/Types";
import UnionTypes from "./components/UnionTypes";
import User from "./components/User";

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
      <OptionalProps msg="Hi"/>
      <OptionalProps />
      <ClickEventProps btn={(event,id)=> {
        console.log(event,id)
      }}/>
      <OnChangeHandlerProps handleOnChange={(event)=> {
        console.log(event)
      }}/>
    </div>
  );
}

export default App;
