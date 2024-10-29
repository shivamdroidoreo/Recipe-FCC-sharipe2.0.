import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar.js';
import About from './components/Aboutus.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar/><Home /></>,
  },
  {
    path:'/about',
    element: <><Navbar/><About /></>,
  },
  // Add other routes here if needed
]);

function App() {
  return (
    <>
    
    < RouterProvider router={router}/>
    </>
    
  );
}

export default App;
