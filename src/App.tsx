import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './page/home';
import Contact from './page/contact';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
