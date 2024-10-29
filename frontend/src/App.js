import './App.css';
import Home from './components/Home';
import NavBar from './components/Navbar'; 
import AboutUs from './components/Aboutus'; 
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
  // Add other routes here if needed
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
