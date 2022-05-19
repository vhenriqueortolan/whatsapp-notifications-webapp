import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProtectedLayout from "./components/ProtectedLayout/index "
import { AuthProvider } from "./context/AuthProvider"
import ContextFormsProvider from "./context/ContextFormsProvider"
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ProtectedLayout><ContextFormsProvider><Home /></ContextFormsProvider></ProtectedLayout>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
