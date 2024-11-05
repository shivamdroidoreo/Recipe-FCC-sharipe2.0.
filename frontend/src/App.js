import './App.css';
import Home from './components/Home';
import NavBar from './components/Navbar'; 
import AboutUs from './components/Aboutus'; 
import RecipesByArea from './components/RecipesByArea'; 
import RecipeDetail from './components/RecipeDetail'; 
import Login from './components/Login';
import Register from './components/Register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <NavBar />
        <AboutUs />
      </>
    ),
  },
  {
    path: '/recipes/:area',
    element: (
      <>
        <NavBar />
        <RecipesByArea />
      </>
    ),
  },
  {
    path: '/recipe/:id',
    element: (
      <>
        <NavBar />
        <RecipeDetail />
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
        <NavBar />
        <Login />
      </>
    ),
  },
  {
    path: '/register',
    element: (
      <>
        <NavBar />
        <Register />
      </>
    ),
  },
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
