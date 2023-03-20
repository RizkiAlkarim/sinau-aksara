import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Context from "./Context"
import Home from "./pages/Home"
import Learn from "./pages/Learn"
import Quiz from "./pages/Quiz"
import NotFound from "./pages/NotFound"
import Table from './components/Table'
import About from './pages/About'


function App() {
  const { ThemeProvider } = Context

  return (
    <ThemeProvider>
      <div>
        <Router>
          <Routes>
            <Route index path="/" element={<Home />}></Route>
            <Route path="learn" element={<Learn />}></Route>
            <Route path="quiz" element={<Quiz />}></Route>
            <Route path="table" element={<Table />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
