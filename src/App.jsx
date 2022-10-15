import Startup from './pages/startup/startup'
import Signup from './pages/signup/signup'
import Home from './pages/home/home'
import Signin from './pages/signin/signin'
import Reset from './pages/reset/reset'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Startup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reset" element={<Reset />} />
              
      </Routes>
    </BrowserRouter>
  )
}

export default App