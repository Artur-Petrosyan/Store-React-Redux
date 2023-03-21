import Header from './components/Header/Header'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./components/pages/Home/Home"
import AboutAs from "./components/pages/About as/AboutAs"
import Contacts from './components/pages/Contacts/Contacts'
import Store from './components/pages/Store/Store'
import Basket from './components/pages/Basket/Basket'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='about as' element={<AboutAs />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='basket' element={<Basket />} />
      </Routes>
    </div>
  )
}

export default App
