import "./App.css";
import { Card } from "./components/card";
import Logo from "./assets/react.svg";
import Form from './form';

function App() {
  // const [count, setCount] = useState(4);
  // const isTrue = true;
  return (
    <>
      <div id="header" className="header">
        <h1 id="h1" style={{ color: "black" }}>
          Welcome to my Blog
        </h1>
        <p>This is a subtitle</p>
      </div>
      <Card title="Blog 1" description="Description 1" icon={Logo} alt="image1" />
      <Card title="Blog 2" description="Description 2" icon={Logo} alt="image2" />

      <Form />
    </>
  );
}

export default App;
