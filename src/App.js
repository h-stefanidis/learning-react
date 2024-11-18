import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Components/Create';
import BlogDetails from './Components/BlogDetails';
import NotFound from './Components/NotFound';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar /> 
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
