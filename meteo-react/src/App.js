import NavBar from './components/NavBar';
import './App.css';
import HomePage from './pages/homePage';
import ResultsPage from './pages/resultsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import MyFooter from './components/MyFooter';


function App() {
  return (
    <div className="App">
      
      <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results/:city" element={<ResultsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MyFooter/>
    </Router>
    </div>
  );
}

export default App;
