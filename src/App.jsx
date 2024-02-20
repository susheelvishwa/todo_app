import TodoApp from "./componets/appName";
import PlaceHolder from "./componets/placeholder";
import OneMore from "./componets/OneMore";
import "./componets/APPP/App.css";

function App() {
  return (
    <>
      <center>
        <TodoApp />
        <PlaceHolder />
        <div className="item">
          <OneMore />
          <OneMore />
        </div>
      </center>
    </>
  );
}

export default App;
