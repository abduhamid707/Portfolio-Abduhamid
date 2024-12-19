import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Layouts/Footer'
import Header from './Layouts/Header'
import Home from './pages/Home'
import DetailedProject from './sections/DetailedProject'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/project/:id'} element={<DetailedProject />} />
      </Routes>
      <Footer />
    </> 
  )
}

export default App
