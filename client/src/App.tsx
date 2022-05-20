import React from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import ProtectedLayout from "./components/ProtectedLayout/index "
import { AuthProvider } from "./context/AuthProvider"
import ContextFormsProvider from "./context/ContextFormsProvider"
import Login from "./pages/Login"

function App() {


  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedLayout />} />
          <Route path="/login" element={<ContextFormsProvider><Login /></ContextFormsProvider>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
