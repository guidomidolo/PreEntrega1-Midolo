import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Main />
      <ItemListContainer />
      <Footer /> 
    </div>
  );
}

export default App;
