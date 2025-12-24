import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import Checkout from './pages/Checkout';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/book/:id" element={<BookDetail />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
