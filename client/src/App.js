import './App.css';
import { Home } from './components/Home/Home';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Teachers } from './components/Teachers/Teachers';
import { SignUp } from './components/SignUp/SignUp';
import { Login } from './components/Login/Login';
import { AboutUs } from './components/AboutUs/AboutUs';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/teachers' element={<Teachers />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/conditions' element={<Login />}></Route>
          <Route path='/AboutUs' element={<AboutUs />}></Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
