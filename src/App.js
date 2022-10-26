import './App.css';
import LinkData from './links.json'
import Heading from './components/Heading';
import Links from './components/Links';
import Social from './components/Social';
import Foot from './components/Foot';

function App() {
  return (
    <div className="App">
      <Heading/>
      <Links linktrees={LinkData}/>
      <Social/>
      <Foot/>
    </div>
  );
}

export default App;
