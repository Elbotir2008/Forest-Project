import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Uslugi from './pages/uslugi/Uslugi'
import Projects from './pages/projects/Projects'
import Contacts from './pages/contacts/Contacts'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uslugi" element={<Uslugi />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
