
import './App.css'
import Home from './pages/Home'
import Landing from './pages/Landing'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'
import {Routes,Route} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
    <ToastContainer position="top-right" autoClose={5000} theme="colored"/>
<Header/>
    <Routes>
      <Route element={<Landing/>} path={'/'} />
      <Route element={<Home/>} path={'/home'}/>
      <Route element={<History/>} path={'/history'}/>
    </Routes>
<Footer/>
    
    
    
    </>
  )
}

export default App
