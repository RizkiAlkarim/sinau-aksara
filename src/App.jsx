import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Learn from "./pages/Learn"
import Game from "./pages/Game"
// import TestForm from "./TestForm"

function App() {

  return (
    <div className="App">
    {/* <TestForm /> */}
    <Router>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="learn" element={<Learn />}></Route>
        <Route path="quiz" element={<Game />}></Route>
      </Routes>
    </Router>
    </div>
  )
}

export default App
