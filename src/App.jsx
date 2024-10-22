import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Calculator from './pages/Calculator'
import Contact from './pages/Contact'
import Home from './pages/Home'
import TodoList from './pages/TodoList'
import Counter from './pages/Counter';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todoList" element={<TodoList />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
      <Footer />
    </>
  )
}

export default function AppWrapper() {
  return (
  <BrowserRouter>
    <App />
  </BrowserRouter>
  )
}

