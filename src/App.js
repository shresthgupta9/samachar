import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App" style={{ backgroundColor: "#fafafa" }}>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<News category="general" />} />
          <Route path="/samachar" element={<News category="general" />} />
          <Route path="/business" element={<News category="business" />} />
          <Route path="/entertainment" element={<News category="entertainment" />} />
          <Route path="/health" element={<News category="health" />} />
          <Route path="/science" element={<News category="science" />} />
          <Route path="/sports" element={<News category="sports" />} />
          <Route path="/technology" element={<News category="technology" />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
