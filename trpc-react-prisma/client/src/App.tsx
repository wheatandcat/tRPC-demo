import Trpc from "./containers/Trpc";
import Page from "./Page";
import "./App.css";

function App() {
  return (
    <Trpc>
      <div className="container my-5 mx-4">
        <Page />
      </div>
    </Trpc>
  );
}

export default App;
