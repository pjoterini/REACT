import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import './index.css'
// components
import About from './components/About';
import Home from './components/Home';
// layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='help' element={<HelpLayout/>}>
        <Route path='faq'></Route>
        <Route path='contact'></Route>
      </Route>

      <Route path='*' element={<ErrorPage/>}></Route>
    </Route>
  )
)

function App() {

  return (
   <RouterProvider router={router} />
  );
}

export default App
