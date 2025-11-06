import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './Pages/Home.jsx';
import AppLayout from './layouts/AppLayout.jsx';

const App = ()=>{
  const router = createBrowserRouter([
    {
      path:'/',
      element:<AppLayout/>,
      children : [
        {
          index:true,
          element:<Home/>
        }
      ]
    }
  ])
  return(
    <RouterProvider router={router}/>
  )
}

export default App;