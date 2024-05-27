import { useContext } from "react"
import Context from "../Context"
import Header from "../components/Header"
import Table from "../components/Table"

function Learn() {
  const { ThemeContext } = Context
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`h-screen flex flex-col ${theme ? 'bg-black' : 'bg-white'}`}>
      <Header />
      <Table />
    </div>
  )
}

export default Learn