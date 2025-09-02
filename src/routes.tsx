import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './assets/pages/home';
import Services from './assets/pages/Services';
import Portfolio from './assets/pages/Portfolio';
import Blogs from './assets/pages/Blogs';
import AboutUs from './assets/pages/AboutUs';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);
