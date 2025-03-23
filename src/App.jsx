import { BrowserRouter, Routes, Route } from "react-router";
import Header from './components/header.jsx';
import Landing from './pages/landing.jsx';
import AuthPage from "./pages/authPage.jsx";
import Profile from "./pages/profile.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
