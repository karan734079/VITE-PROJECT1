import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Calculator from './pages/Calculator'
import Contact from './pages/Contact'
import Home from './pages/Home'
import TodoList from './pages/TodoList'
import CounterRedux from './pages/CounterRedux';
import { Provider } from 'react-redux';
import { appStore } from './store/appStore';
import CalculatorRedux from './pages/CalculatorRedux';
import TodoListRedux from './pages/TodoListRedux';

function App() {

  return (
    <Provider store={appStore} >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todoList" element={<TodoList />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/counterRedux" element={<CounterRedux />} />
        <Route path="/calculatorRedux" element={<CalculatorRedux />} />
        <Route path="/todolistRedux" element={<TodoListRedux />} />
      </Routes>
      <Footer />
    </Provider>
  )
}

export default function AppWrapper() {
  return (
  <BrowserRouter>
    <App />
  </BrowserRouter>
  )
}

