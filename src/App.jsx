import { BrowserRouter, Routes, Route } from "react-router";

// import Header from './components/Header';
import Footer from "./components/Footer";

import Landing from './pages/Landing';
import AuthPage from "./pages/AuthPage";
import Profile from "./pages/Profile";
import AboutUs from "./pages/About";
import Feed from "./pages/Feed";

function App() {
  return (
    <BrowserRouter>
        {/* <Header /> */}
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
