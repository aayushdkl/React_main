// import { ToDoList } from "./ToDoList";
import { NameFunc } from "./NameFunc";

function App() {
  return (
    //first basic example
    // <div className="large" id="largeDiv">
    //   <label htmlFor="InputId">There goes the alarm</label>
    //   <input id="InputId" type="number" defaultValue={3}></input>

    //   <div>My value is : {null}</div>
    //   <div>My value is : {undefined}</div>
    //   <div>My value is : {false}</div>

    //   <div>My value is : {true}</div>
    //   <div>My value is : {0}</div>
    // </div>

    // <div>   //For todolist example
    //   <h1>ToDoList</h1>
    //   <ToDoList />
    // </div>

    <div>
      <NameFunc name="Aayush Dhakal" age={19} isProgrammer={true} />
      <NameFunc age={19} isProgrammer={false} />
      <NameFunc name="Aayush Dhakal" isProgrammer={null} />
      <NameFunc name="Eminem" age={50} isProgrammer />
      <NameFunc name="Taylor" age={80} isProgrammer={33} />
    </div>
  );
}

export default App;
