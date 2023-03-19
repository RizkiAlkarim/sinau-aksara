import { Link } from "react-router-dom"
import Header from "../components/Header"

function Home() {
  const homeItems = [
    {label: "Learn", href:"/learn"},
    {label: "Quiz", href:"/quiz"},
    {label: "About", href:"/about"},
  ]

  return (
  <div className="h-screen flex flex-col">
  <Header />
  <nav className='flex flex-col justify-center items-center gap-2 py-2 h-full'>
      <h1 className='text-4xl font-bold text-center mb-5'>Sugeng <br/> Rawuh</h1>
      <ul className='grid grid-rows-2 gap-3'>
        {homeItems.map(({label, href})=>
          <Link
            key={label}
            className='bg-orange-200 text-red-600 rounded-md px-3 py-2 font-bold text-lg text-center'
            to={href}>
            {label}
          </Link>
        )}
      </ul>
    </nav>
    </div>
  )
}

export default Home