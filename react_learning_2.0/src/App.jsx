function App() {
  return (
    <div className="large" id="largeDiv">
      <label htmlFor="InputId">There goes the alarm</label>
      <input id="InputId" type="number" defaultValue={3}></input>

      <div>My value is : {null}</div>
      <div>My value is : {undefined}</div>
      <div>My value is : {false}</div>

      <div>My value is : {true}</div>
      <div>My value is : {0}</div>
    </div>
  );
}

export default App;
