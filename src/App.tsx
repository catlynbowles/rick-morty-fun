import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Routes from './Components/Routes/Routes';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
