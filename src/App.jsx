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
import { useDispatch, useSelector } from 'react-redux'; 
import { Provider } from 'react-redux';
import { appStore } from './store/appStore';
import NetflixGpt from './components/NetflixGpt';
import MyYoutube from './components/MyYoutube';
import { useEffect } from 'react';
import { setAuthState , setAuthLoading} from './store/authSlice';
import authservice from './appWrite/auth';
import ShimmerLoader from './components/Shimmer';
// import ShimmerLoader from './components/Shimmer';

const ProtectedRoute = ({ element }) => {
  const { status, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <div>Loading...</div>; // Show loading state while auth is being checked
  }

  return status ? element : <Navigate to="/get-started" />;
};

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchAuthState = async () => {
      const authToken = localStorage.getItem('authToken');

      if (authToken) {
        try {
          const userData = await authservice.getCurrentUser();
          dispatch(setAuthState({
            status: true,
            userData,
          }));
        } catch {
          dispatch(setAuthState({ status: false, userData: null }));
        }
      } else {
        dispatch(setAuthLoading(false)); // No token, set loading to false
      }
    };

    fetchAuthState();
  }, [dispatch]);

  if (loading) {
    return <div><ShimmerLoader /></div>; // Show a loading screen or spinner if loading
  }

  return (
    <>
      <Header />
      <Routes>
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
        <Route path="/netflixGpt" element={<ProtectedRoute element={<NetflixGpt />} />} />
        <Route path="/my-youtube" element={<ProtectedRoute element={<MyYoutube />} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
    <Provider store={appStore}>
      <App />
      </Provider>
    </BrowserRouter>
  );
}
