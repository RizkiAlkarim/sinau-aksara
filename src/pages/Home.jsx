import { Link } from "react-router-dom"
import Header from "../components/Header"

function Home() {
  let button = 'bg-orange-200 text-red-600 rounded-md px-3 py-2 font-bold text-lg text-center'

  return (
  <div className="h-screen flex flex-col">
  <Header />
  <nav className='flex flex-col justify-center items-center gap-2 py-2 h-full'>
      <h1 className='text-4xl font-bold text-center mb-5'>Sugeng <br/> Rawuh</h1>
      <ul className='grid grid-rows-2 gap-3'>
        <Link className={button} to="/learn">Learn</Link>
        <Link className={button} to="/quiz">Quiz</Link>
      </ul>
    </nav>
    </div>
  )
}

export default Home