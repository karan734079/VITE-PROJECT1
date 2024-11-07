/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import TodoList from './pages/TodoList';
import Calculator from './pages/Calculator';
import CounterRedux from './pages/CounterRedux';
import CalculatorRedux from './pages/CalculatorRedux';
import TodoListRedux from './pages/TodoListRedux';
import Weather from './pages/Weather';
import Login from './pages/Login';
import Register from './pages/Register';
import Rps from './pages/Rps';
import GetStarted from './pages/GetStarted';
import Home from './pages/Home';
import { useSelector } from 'react-redux'; 

import { Provider } from 'react-redux';
import { appStore } from './store/appStore';

// ProtectedRoute wrapper for logged-in users
const ProtectedRoute = ({ element }) => {
  const { status } = useSelector((state) => state.auth);
  return status ? element : <Navigate to="/get-started" />;
};

function App() {
  return (
    <Provider store={appStore}>
      <Header />
      <Routes>
        {/* Define routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todoList" element={<ProtectedRoute element={<TodoList />} />} />
        <Route path="/calculator" element={<ProtectedRoute element={<Calculator />} />} />
        <Route path="/counterRedux" element={<ProtectedRoute element={<CounterRedux />} />} />
        <Route path="/calculatorRedux" element={<ProtectedRoute element={<CalculatorRedux />} />} />
        <Route path="/todolistRedux" element={<ProtectedRoute element={<TodoListRedux />} />} />
        <Route path="/weatherApp" element={<ProtectedRoute element={<Weather />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rps" element={<ProtectedRoute element={<Rps />} />} />
      </Routes>
      <Footer />
    </Provider>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
