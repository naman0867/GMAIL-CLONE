import Navbar from './components/Navbar'

function App() {
  return (
    <div className="h-screen flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* Body (empty for now, you’ll build later) */}
      <div className="flex flex-1">
        <div className="w-64 border-r p-4">
          Sidebar
        </div>

        <div className="flex-1 p-4">
          Inbox Content
        </div>
      </div>

    </div>
  )
}

export default App