import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Review from './Components/Review/Review';
import Dashboard from './Components/Dashboard/Dashboard';
import NotFound from './Components/NotFound/NotFound';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/review" element={<Review></Review>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
