import Header from "../components/Header"

function NotFound() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="font-bold text-2xl">Page not found</h1>
      </div>
    </div>
  )
}

export default NotFound