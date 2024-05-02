import Mainlayout from "./Components/Layout/mainlayout"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Components/pages/Home"
import About from "./Components/pages/About"
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
