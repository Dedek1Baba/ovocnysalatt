import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './pages/AppRoutes'
import { Toaster, toast } from "sonner";

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppRoutes>
    <Toaster position="top-right" richColors closeButton></Toaster></AppRoutes>
  )
}

export default App
