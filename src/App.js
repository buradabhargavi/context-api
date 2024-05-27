import "./App.css";
import Display from "./components/layouts/Display";
import ItemProvider from "./components/Store/ItemProvider";

function App() {
  return (
    <ItemProvider>
      <div className="App">
        <Display></Display>
      </div>
    </ItemProvider>
  );
}

export default App;
