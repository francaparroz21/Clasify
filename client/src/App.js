import './App.css';
import { Home } from './components/Home/Home';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
