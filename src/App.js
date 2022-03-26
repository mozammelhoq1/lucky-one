import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import QuesAndAns from './components/QuesAndAns/QuesAndAns';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <QuesAndAns></QuesAndAns>
    </div>
  );
}

export default App;
