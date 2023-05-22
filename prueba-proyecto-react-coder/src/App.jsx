import './App.css';
import './components/fonts/RazerF5.otf'
import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Banner from './components/Banner';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div>
      <Header />
      <CallToAction />
      <Banner />
      <ItemListContainer />
      <Footer /> 
    </div>
  );
}

export default App;
