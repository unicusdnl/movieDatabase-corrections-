import Startup from './pages/startup/startup'
import Signup from './pages/signup/signup'
import Home from './pages/home/home'
<<<<<<< HEAD
import Signin from './pages/signin/signin'
import Reset from './pages/reset/reset'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom'

>>>>>>> 0855b8378ad3ef450fc6c5b99d7b15fa6fcef071

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Startup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reset" element={<Reset />} />
              
=======
        <Route path="/startup" element={<Startup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
>>>>>>> 0855b8378ad3ef450fc6c5b99d7b15fa6fcef071
      </Routes>
    </BrowserRouter>
  )
}

export default App