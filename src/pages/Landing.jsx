import { NavLink } from "react-router";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-[100px]">
      {/* Hero Section */}
      <section className="w-full text-center px-6">
        <h2 className="text-6xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Connecting Influencers & Creatives</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto opacity-80">
          Find and collaborate with top scriptwriters, photographers, and stylists to bring your vision to life.
        </p>
        <NavLink to="/login">
          <button className="btn btn-lg mt-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-all">
            Get Started →
          </button>
        </NavLink>
      </section>
      
      {/* Features Section */}
      <section id="features" className="mt-24 px-6 w-full max-w-6xl text-center">
        <h3 className="text-4xl font-semibold">Why Influenzee?</h3>
        <div className="mt-12 grid md:grid-cols-3 gap-12">
          <div className="p-6 bg-white/10 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <div className="text-3xl">🔍</div>
            <h4 className="text-xl font-bold mt-4">Discover Talent</h4>
            <p className="mt-2 opacity-80">Easily find skilled scriptwriters, photographers, and stylists.</p>
          </div>
          <div className="p-6 bg-white/10 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <div className="text-3xl">🤝</div>
            <h4 className="text-xl font-bold mt-4">Seamless Collaboration</h4>
            <p className="mt-2 opacity-80">Work together effortlessly to bring creative ideas to life.</p>
          </div>
          <div className="p-6 bg-white/10 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <div className="text-3xl">🚀</div>
            <h4 className="text-xl font-bold mt-4">Boost Your Brand</h4>
            <p className="mt-2 opacity-80">Expand your reach and elevate your content quality.</p>
          </div>
        </div>
      </section>
    </div>
  );
}