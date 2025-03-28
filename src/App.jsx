import { BrowserRouter, Routes, Route } from "react-router";

import Header from './components/Header.jsx';
import Footer from "./components/Footer.jsx";

import Landing from './pages/Landing.jsx';
import AuthPage from "./pages/AuthPage.jsx";
import Profile from "./pages/Profile.jsx";
import AboutUs from "./pages/About.jsx";
import Feed from "./pages/Feed.jsx";

function App() {
  return (
    <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/content" element={<Feed />} />
          </Routes>
          <Footer />
    </BrowserRouter>
  )
}

export default App
