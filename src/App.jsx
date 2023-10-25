import Layout from "./Layout"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Products from "./pages/Products"
import Portfolio_Automotive from "./pages/Portfolio_Automotive"
import Portfolio_Retail from "./pages/Portfolio_Retail"
import Portfolio_Hospitality from "./pages/Portfolio_Hospitality"

import Portfolio_Healthcare from "./pages/Portfolio_Healthcare"
import Portfolio_All from "./pages/Portfolio_All"
import Portfolio_banner from "./pages/Portfolio_banner"


function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path='/contact' element={<Contact/>}/>
            
            <Route path='/portfolio/automotive' element={<Portfolio_Automotive/>}/>
            <Route path='/portfolio/retail' element={<Portfolio_Retail/>}/>
            <Route path='/portfolio/hospitality' element={<Portfolio_Hospitality/>}/>
            <Route path='/portfolio/healthcare' element={<Portfolio_Healthcare/>}/>
            <Route path='/portfolio/banner' element={<Portfolio_banner/>}/>
            <Route path='/portfolio/all' element={<Portfolio_All/>}/>
            

            <Route path='/products' element={<Products/>}/>

            </Route>
        </Routes>
      </Router>
     
    </div>
  )
}

export default App
