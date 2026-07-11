import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Header cartCount={0} />
      <Navbar />
    </div>
  );
}

export default App;
