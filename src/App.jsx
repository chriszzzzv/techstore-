import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
function App() {
  return (
    <div>
      <Header cartCount={0} />
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
