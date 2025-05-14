import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Menu from './pages/menu';
import Layout from './ui/layout';

function App() {

  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
      </Routes>
    </Layout>
  )
}

export default App
