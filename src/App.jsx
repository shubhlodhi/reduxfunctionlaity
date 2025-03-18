import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
// import './App.css'
import Home from '../components/home'
import Counter from '../components/counter'
import Home2 from '../components/home2'
import User from '../components/userinfo'
import { Provider } from 'react-redux'
import store from '../components/store'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}>
      <Route path='/' element={<Home2/>}></Route>
      <Route path='/counter' element={<Counter/>}></Route>
      <Route path='/userdata' element={<User/>}></Route>
    
      </Route>
     
    </Routes>
    </BrowserRouter>
    </Provider>
     
    </>
  )
}

export default App
