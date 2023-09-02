import Layout from "./Layout"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Portfolio from "./pages/Portfolio"
import Products from "./pages/Products"



function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/products' element={<Products/>}/>

            </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
