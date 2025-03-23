import { BrowserRouter, Routes, Route } from "react-router";
import Header from './components/header.jsx';
import Landing from './pages/landing.jsx';
import AuthPage from "./pages/authPage.jsx";
import Profile from "./pages/profile.jsx";
import AboutUs from "./pages/about.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
