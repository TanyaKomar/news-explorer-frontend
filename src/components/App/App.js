import './App.css';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Route path='/'></Route>
      <Footer />
    </>
  );
}

export default App;
