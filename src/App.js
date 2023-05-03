
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Index from './pages/Index';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Loading />
        <Header />

        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
