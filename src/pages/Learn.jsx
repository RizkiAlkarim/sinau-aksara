import { Link } from "react-router-dom"
import Header from "../components/Header"
import Table from "../components/Table"

function Learn() {
  const learnItems = [
    {label: "Hanacaraka", href:"/hanacaraka"},
    {label: "Sandhangan", href:"/sandhangan"},
    {label: "Pasangan", href:"/pasangan"}
  ]
  
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Table />
    </div>
  )
}

export default Learn