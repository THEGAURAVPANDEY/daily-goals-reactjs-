import "./App.css";
import Header from "./components/Header";
import Home from "./components/home";
// import { Header, Header2 } from "./components/Header";
// we are adding another component
// and using in other div by using self-closing tag

function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;

// we can export and import in two ways
// 1. default proces
// export default component-name--> for export
//for import this default component -> import any-name from "./directory-path"

// another methd to export is by using curly braccks
// export{component1,component2}
//import{component1,component2} from "./directory-path"
